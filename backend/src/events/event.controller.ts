import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { CommentService } from '../comments/comment.service';

@Controller('events')
export class EventController {
  constructor(
    private readonly eventService: EventService,
  ) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return await this.eventService.create(createEventDto);
  }
  /*

  @Get()
  async findAll() {
    return await this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.eventService.findOne(id);
  }*/


}
