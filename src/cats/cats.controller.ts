import { Body, Controller, Get, Param, Query, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CatClass } from './classes/cat.class';
import { CreateCatDto } from './dto/create-cat.dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: '创建一只猫' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCatDto: CreateCatDto): Promise<CatClass> {
    return this.catsService.create(createCatDto);
  }

  @Get('find/:id')
  @ApiOperation({ summary: '查找一只猫' })
  findOne(@Param('id') id: string): Promise<CatClass> {
    return this.catsService.findOne(id);
  }

  @Get('all')
  @ApiOperation({ summary: '查找所有猫' })
  findAll(): Promise<CatClass[]> {
    return this.catsService.findAll()
  }

  @Get('allf')
  @ApiOperation({ summary: '分页呢' })
  async findAllF(
    @Query('page') page: number,
    @Query('limit') limit: number
  ): Promise<CatClass> {
    limit = limit > 100 ? 100 : limit
    const cats: any = await this.catsService.paginate({page, limit})
    return cats
  }
}