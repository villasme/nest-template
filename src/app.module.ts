import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Config } from './config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { NoteModule } from './note/note.module';

@Module({
  imports: [
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

