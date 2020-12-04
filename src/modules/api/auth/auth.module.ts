import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { RoleAuthGuard } from './guards/auth.guards';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [
        AuthController, ],
  providers: [
    UsersService,
    AuthService, 
    LocalStrategy, 
    JwtStrategy, 
    {
      provide: APP_GUARD,
      useClass: RoleAuthGuard
    }
  ],
  exports: [AuthService],
})
export class AuthModule {}