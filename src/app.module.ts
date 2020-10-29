import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Config } from './config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { NoteModule } from './note/note.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'web')
    }),
    TypeOrmModule.forRoot(Config.DB),
    NoteModule
  ],
  controllers: [],
  providers: [
    AppService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/**')
  }
}

