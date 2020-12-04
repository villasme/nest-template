import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/UserEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [],
    providers: [UsersService ],
    exports: [UsersService]
})

export class UsersModule {}
