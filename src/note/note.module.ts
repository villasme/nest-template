import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BearingTypes } from 'src/entities/BearingTypes';

@Module({
    imports: [TypeOrmModule.forFeature([BearingTypes])],
    controllers: [
        NoteController,],
    providers: [
        NoteService],
})
export class NoteModule {}
