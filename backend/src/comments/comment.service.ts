import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Comment } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private commentModel: Model<Comment>,
    /*@Inject(CACHE_MANAGER) private cacheManager: Cache*/) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel({
      ...createCommentDto,
      evento: new Types.ObjectId(createCommentDto.evento),
      persona: new Types.ObjectId(createCommentDto.persona),
    });
    return createdComment.save();
  }

  /*
  async findByEvent(eventId: string) {
    const cacheComment = await this.cacheManager.get(`comment_${eventId}`);
    if (cacheComment) {
      return cacheComment;
    }
    const comment = await this.commentModel.find({ evento: new Types.ObjectId(eventId) })
                                          .populate('evento')
                                          .populate('persona')
                                          .exec();
    this.cacheManager.set(`comment_${eventId}`, comment)
    return comment
   
  }*/
}
