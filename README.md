

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

```js
/**  src/config */
export class Config {
  public static readonly Port: number = 4000

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