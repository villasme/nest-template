import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';

import { Config } from './config';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const server = app.getHttpAdapter().getInstance()
  /** 静态文件压缩 */
  app.use(compression())

  const viewsPath = join(__dirname, '..', 'views')
  /** 设置模版引擎 */
  app.useStaticAssets(join(__dirname, '..', 'public'),{
    prefix: '/static/',   //设置虚拟路径
  });
  app.setViewEngine('pug');
  app.setBaseViewsDir(viewsPath) // 放视图的文件
  /** 给pug模板设置绝对路径  eg: /layout/web */
  /** 再次定义本地变量 */
  server.locals.basedir = viewsPath
  server.locals.__env = {
    version: '1.0.0'
  }
  /** 设置模版引擎-end */

  /** 挂载静态文件目录 */
  app.useStaticAssets(join(__dirname, '..', 'admin/dist/'), {prefix: '/admin/'})

  /** 拦截错误信息 */
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 处理跨域
  app.enableCors();
  
  const options = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('The Test API description')
    .setVersion('2.0')
    .addBearerAuth(
      {
        description: '*token*',
        type: 'apiKey',
        name: 'token',
        in: 'header'
      },
      'JWT',
    )
    .addSecurityRequirements('JWT')
    .build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/swagger-ui', app, document);

  await app.listen(Config.Port);
}

bootstrap();
