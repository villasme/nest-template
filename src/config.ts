import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import * as path from 'path'

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
}