import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDTO } from './dto/create-people.dto';

@Controller('people')
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService,
  ) {}

  @Post()
  async create(@Body() createPeopleDTO: CreatePeopleDTO) {
    return await this.peopleService.create(createPeopleDTO);
  }

  /*
  @Get()
  async findAll() {
    return await this.peopleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.peopleService.findOne(id);
  }*/


}