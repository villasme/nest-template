

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# 生成entities文件数据表的模型
$ npm run gen-orm
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 集成

* swagger v3
* @nest/typeorm  支持mysql, sqlit3等
* nestjs-typeorm-paginate 分页
* 中间件 middleware
* 支持 web admin api 分层
* 支持[pug](https://pugjs.org/zh-cn/api/reference.html)
  - [支持bootstrap4](https://getbootstrap.net/docs/components/navbar/#toggler)
```js
// TODO: 分层后不能使用：app.setGlobalPrefix('api');

/** 
 * src/main.ts
 * 挂在静态文件目录 
 * */
app.useStaticAssets(join(__dirname, '..', 'admin/dist/'), {prefix: '/admin/'})
/**
 * src/modules/admin
 * 设置所有路由代理到静态文件
 */
import { ServeStaticModule } from '@nestjs/serve-static'
ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '..', '..','admin/dist'),
    renderPath: '/admin/*',
    exclude: ['/api/*', '/app/*'],
})
```

```js
/**  src/config */
export class Config {
  public static readonly Port: number = 5050

  /** sqlite-config */
  public static readonly DB: TypeOrmModuleOptions = {
    type: 'sqlite',
    /** 
     * 需要配置自己的数据库 
     * TOOD 相对路径要转成绝对路径
     * */
    database: path.resolve(__dirname, '../../db/web'),
    entities: [`${__dirname}/entities/**.{ts,js}`],
    synchronize: false,
    logging: true
  }

   /** mysql-config */
  public static readonly DB: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '********',
    database: 'quyun',
    entities: [`${__dirname}/entities/**.entity{.ts,.js}`],
    synchronize: true
  }
}
```
## 目录结构说明

```js
├── Dockerfile
├── README.md
├── admin                 后台管理系统-使用nuxt打包
├── dist                  nestjs打包输出目录
├── nest-cli.json
├── package-lock.json
├── package.json
├── public                公共静态资源目录
├── scripts
├── src
│   └── modules
|    └── admin            后台管理controller
|    └── api              api接口controller
|    └── app              官网controller
├── test
├── tsconfig.build.json
├── tsconfig.json
└── views                 pug模板目录
```

