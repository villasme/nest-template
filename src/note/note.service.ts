import { Injectable } from '@nestjs/common';
import { BearingTypes } from 'src/entities/BearingTypes';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { ApiResponse } from '@nestjs/swagger';

@Injectable()
export class NoteService {
  constructor (
    @InjectRepository(BearingTypes) 
    private readonly noteRepository: Repository<BearingTypes> 
  ) { }

  async findAll (options: IPaginationOptions): Promise<Pagination<BearingTypes>> {
    const queryBuilder = this.noteRepository.createQueryBuilder();
    return paginate<BearingTypes>(queryBuilder, options)
  }

  @ApiResponse({type: [BearingTypes]})
  async findAll1 (): Promise<BearingTypes[]> {
    return await this.noteRepository.find()
  }

  findById(id: string | number): Promise<BearingTypes> {
    return this.noteRepository.findOne(id)
  }

  save (NoteEntity: BearingTypes): Promise<BearingTypes> {
    return this.noteRepository.save(NoteEntity)
  }

  delete (id: string | number): Promise<DeleteResult> {
    return this.noteRepository.delete(id)
  }
}
