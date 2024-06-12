import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { People, PeopleSchema } from './people.schema';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: People.name, schema: PeopleSchema }]),
  ],
  controllers: [PeopleController],
  providers: [PeopleService],
  
})
export class PeopleModule {}