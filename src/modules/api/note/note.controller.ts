import { Controller, Get, Body, Post, Query, Param, UseGuards, Request } from '@nestjs/common';
import { NoteService } from './note.service';
import { BearingTypes } from 'src/entities/BearingTypes';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@ApiTags('api/note')
@Controller('api/note')
export class NoteController { 
  constructor(
    private readonly noteService: NoteService
  ){}

  @Get('/all')
  @ApiOperation({summary: '查找所有'})
  @ApiCreatedResponse({description: '查找所有'})
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number
  ): Promise<Pagination<BearingTypes>> {
    return this.noteService.findAll({page, limit})
  }

  @Get('/all1')
  @ApiOperation({summary: '查找所有1'})
  @ApiCreatedResponse({description: '查找所有1'})
  findAll1(
  ): Promise<BearingTypes[]> {
    console.log('findAll1')
    return this.noteService.findAll1()
  }

  @Get(':id')
  @ApiOperation({summary: '查找单个'})
  findById (@Param('id') id: number): Promise<BearingTypes> {
    return this.noteService.findById(id)
  }

  @Post('/create')
  @ApiOperation({summary: '创建'})
  create(@Body() NoteEntity: BearingTypes): Promise<BearingTypes> {
    console.log('create')
    return this.noteService.save(NoteEntity)
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login(@Request() req): Promise<any> {
    console.log('hahahahh')
    return req.user;
  }
}
