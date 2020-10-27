import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './orm/cat.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cat])
    ],
    controllers: [
        CatsController,
    ],
    providers: [ 
        CatsService 
    ],
})
export class CatsModule {}
