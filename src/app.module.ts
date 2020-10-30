import { AdminModule } from './modules/admin/admin.module';
import { ApiModule } from './modules/api/api.module';
import { HomeModule } from './modules/app/home.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Config } from './config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppController } from './app.controller';

@Module({
  imports: [
        AdminModule, 
    ApiModule,
    HomeModule,
    TypeOrmModule.forRoot(Config.DB),
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

