
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entities/UserEntity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getJwt(user: UserEntity): Promise<any> {
    const payload = { username: user.username, sub: user.password };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async login(userEntity: UserEntity): Promise<any> {
    const user = await this.validateUser(userEntity.username, userEntity.password)

    if (!user) {
      return {message: '用户名或密码错误'}
    }
    return this.getJwt(userEntity)
  }
}