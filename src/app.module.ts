import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { NoteModule } from './note/note.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web'),
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot(Config.DB),
    NoteModule
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/**')
  }
}

