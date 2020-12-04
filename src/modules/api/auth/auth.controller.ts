import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { NoAuth } from 'src/common/noAuth';
import { UserEntity } from 'src/entities/UserEntity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
@ApiTags('用户登陆')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
      ){}
  
      @NoAuth()
      @Post('register')
      @ApiOperation({summary: '注册'})
      register(@Body() userEntity: UserEntity): any{
          return this.usersService.saveUser(userEntity)
      }
      
      // @UseGuards(JwtAuthGuard) 手动授权
      @NoAuth()
      @Post('login')
      @ApiOperation({summary: '登陆'})
      // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
      async login(@Body() userEntity: UserEntity): Promise<any> {
        return this.authService.login(userEntity)
      }
}
