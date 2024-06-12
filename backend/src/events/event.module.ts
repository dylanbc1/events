import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from './event.schema';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { CommentModule} from '../comments/comment.module';
import { Comment, CommentSchema } from '../comments/comment.schema';
  // Import CommentModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
    CommentModule,  // Add CommentModule here
  ],
  controllers: [EventController],
  providers: [EventService],
  
})
export class EventModule {}
