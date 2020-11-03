import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class HomeController {
    @Get()
    @Render('home/index')
    root(): any {
        return { title: 'home' };
    }

    @Get('/home')
    @Render('home/index')
    home(): any {
        return { title: 'home' };
    }

    @Get('/test')
    @Render('home/test')
    test(): any {
        return { title: '测试' };
    }
}
