import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { setModulePrefix } from 'src/common/setmoduleprefix.decorator';
@setModulePrefix('api')
@Module({
    imports: [
        UsersModule,
        AuthModule,
        NoteModule,
    ],
    controllers: [],
    providers: [],
})

export class ApiModule {}
