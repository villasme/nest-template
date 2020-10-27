import { Controller, Get, Body, Post, Query, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteEntity } from 'src/entities/note.entity';
import { ApiOperation, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiTags('note')
@Controller('note')
export class NoteController { 
  constructor(
    private readonly noteService: NoteService
  ){}

  @Get()
  @ApiOperation({summary: '查找所有'})
  @ApiCreatedResponse({description: '查找所有'})
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number
  ): Promise<Pagination<NoteEntity>> {
    return this.noteService.findAll({page, limit})
  }

  @Get(':id')
  @ApiOperation({summary: '查找单个'})
  findById (@Param('id') id: number): Promise<NoteEntity> {
    return this.noteService.findById(id)
  }

  @Post()
  @ApiOperation({summary: '创建'})
  create(@Body() NoteEntity: NoteEntity): Promise<NoteEntity> {
    return this.noteService.save(NoteEntity)
  }
}
