import { ApiController } from './api.controller';
import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';


@Module({
    imports: [
        NoteModule
    ],
    controllers: [
        ApiController, ],
    providers: [],
})
export class ApiModule {}
