import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export class Config {
  public static readonly Port: number = 4000

  /** mysql-config */
  public static readonly DB: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tong19930912*',
    database: 'quyun',
    entities: [`${__dirname}/entities/**.entity{.ts,.js}`],
    synchronize: true
  }
}