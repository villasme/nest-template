import { Controller, Get, Render } from '@nestjs/common';
import { NoAuth } from 'src/common/noAuth';

@Controller()
export class HomeController {
    @Get()
    @Render('index')
    root(): any {
        return { message: 'Hello world!' };
    }
    @NoAuth()
    @Get('/home')
    @Render('home/index')
    home(): any {
        return { message: 'Hello world!' };
    }
}
