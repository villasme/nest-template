import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'

@Module({
    imports: [
        // 设置所有路由代理到静态文件
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', '..','admin/dist'),
            renderPath: '/admin/*',
            exclude: ['/api/*', '/app/*'],
        })
    ],
    controllers: [],
    providers: [],
})
export class AdminModule {}
