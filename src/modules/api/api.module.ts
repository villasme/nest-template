import { ApiController } from './api.controller';
import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { setModulePrefix } from 'src/common/setmoduleprefix.decorator';



@setModulePrefix('api')
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
