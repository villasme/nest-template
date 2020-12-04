import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { BearingTypes } from 'src/entities/BearingTypes';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('note')
@Controller('note')
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

}
