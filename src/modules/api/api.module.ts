import { ApiController } from './api.controller';
import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
    imports: [
        AuthModule,
        UsersModule,
        NoteModule
    ],
    controllers: [
        ApiController, ],
    providers: [],
})
export class ApiModule {}
