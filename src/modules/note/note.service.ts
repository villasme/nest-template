import { Injectable } from '@nestjs/common';
import { NoteEntity } from 'src/entities/note.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class NoteService {
  constructor (
    @InjectRepository(NoteEntity) private readonly noteRepository: Repository<NoteEntity> 
  ) { }

  findAll (options: IPaginationOptions): Promise<Pagination<NoteEntity>> {
    const queryBuilder = this.noteRepository.createQueryBuilder();
    return paginate<NoteEntity>(queryBuilder, options)
  }

  findById(id: string | number): Promise<NoteEntity> {
    return this.noteRepository.findOne(id)
  }

  save (NoteEntity: NoteEntity): Promise<NoteEntity> {
    return this.noteRepository.save(NoteEntity)
  }

  delete (id: string | number): Promise<DeleteResult> {
    return this.noteRepository.delete(id)
  }
}
