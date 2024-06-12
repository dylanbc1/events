import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':eventId')
  async create(@Param('eventId') eventId: string, @Body() createCommentDto: CreateCommentDto) {
    createCommentDto.evento = eventId;
    return this.commentService.create(createCommentDto);
  }

  /*
  @Get('event/:eventId')
  async getCommentsByEvent(@Param('eventId') eventId: string) {
    return this.commentService.findByEvent(eventId);
  }*/
}
