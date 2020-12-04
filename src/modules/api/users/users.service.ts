import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';
import { Repository } from 'typeorm';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({username});
  }

  async saveUser (userEntity: UserEntity): Promise<any> {
    this.userRepository.save(userEntity)
    return {data: 'ok'}
  }
}
