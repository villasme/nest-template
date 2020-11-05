import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';

import { Config } from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const server = app.getHttpAdapter().getInstance()

  const viewsPath = join(__dirname, '..', 'views')
  /** 设置模版引擎 */
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static/',   //设置虚拟路径
  });
  app.setViewEngine('pug');
  app.setBaseViewsDir(viewsPath) // 放视图的文件
  /** 给pug模板设置绝对路径  eg: /layout/web */
  server.locals.basedir = viewsPath
  /** 设置模版引擎-end */

  /** 挂载静态文件目录 */
  app.useStaticAssets(join(__dirname, '..', 'admin/dist/'), {prefix: '/admin/'})

  // 处理跨域
  app.enableCors();
  
  const options = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('The Test API description')
    .setVersion('2.0')
    .addBearerAuth()
    /** 添加模块的接口描述 */
    // .addTag('note', 'note-aa')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/swagger-ui', app, document);

  await app.listen(Config.Port);
}

bootstrap();
