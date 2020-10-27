import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
/**
 * @file 应用主页面
 */

import { NoteModule } from './modules/note/note.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Config } from './config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    NoteModule,
    TypeOrmModule.forRoot(Config.DB)
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

