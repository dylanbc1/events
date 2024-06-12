import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeopleDTO } from './dto/create-people.dto';
import { People } from './people.schema';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { Comment, CommentSchema } from '../comments/comment.schema';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(People.name) private peopleModel: Model<People>,
    /*@Inject(CACHE_MANAGER) private cacheManager: Cache*/) {}

  async create(createPeopleDTO: CreatePeopleDTO): Promise<People> {
    console.log('Creating People with DTO:', createPeopleDTO);
    const createdPeople = new this.peopleModel(createPeopleDTO);
    return createdPeople.save();
  }

  /*
  async findAll() {
    const cachedPeople = await this.cacheManager.get('people');
    if (cachedPeople) {
      return cachedPeople;
    }
    const people = await this.peopleModel.find().exec();
    this.cacheManager.set('people', people)
    return people
  }

  async findOne(id: string) {
    const cachedPerson = await this.cacheManager.get(`person_${id}`);
    if (cachedPerson) {
      return cachedPerson;
    }
    const person = await this.peopleModel.findById(id).exec();
    await this.cacheManager.set(`person_${id}`, person)
    return person;
  }*/
}