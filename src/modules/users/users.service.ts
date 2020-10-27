import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user.entity'
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userEntity: Repository<UserEntity>
  ){ }

  findOne(username: string): Promise<UserEntity>  {
    return this.userEntity.findOne({username})
  }
}
