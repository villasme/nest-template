import { Injectable } from '@nestjs/common';
import { CatClass } from './classes/cat.class';
import { Cat } from './orm/cat.entity'
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {paginate, Pagination, IPaginationOptions} from 'nestjs-typeorm-paginate';

@Injectable()
export class CatsService {
  private readonly cats: CatClass[] = [];

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>
  ){}

  create(cat: CreateCatDto): CatClass {
    this.catRepository.save(cat)
    return cat;
  }

  findOne(id: string): Promise<CatClass> {
    return this.catRepository.findOne(id)
  }

  findAll(): Promise<CatClass[]> {
    return this.catRepository.find()
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<Cat>> {
    const queryBuilder = this.catRepository.createQueryBuilder('catQueryBuilder');
    queryBuilder.orderBy('catQueryBuilder.firstName', 'DESC');

    return paginate<Cat>(queryBuilder, options);
  }
}