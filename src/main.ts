import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Config } from './config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 处理跨域
  app.enableCors();
  
  const options = new DocumentBuilder()
    .setTitle('Test example')
    .setDescription('The Test API description')
    .setVersion('2.0')
    .addBearerAuth()
    /** 添加模块的接口描述 */
    .addTag('note', 'note-aa')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);
  await app.listen(Config.Port);
}
bootstrap();
