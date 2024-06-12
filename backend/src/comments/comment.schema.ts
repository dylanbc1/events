import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  texto: string;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  evento: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'People', required: true })
  persona: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
