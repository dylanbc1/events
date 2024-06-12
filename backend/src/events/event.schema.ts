import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';



class Lugar {
  @Prop({ required: true })
  lugar: string;
}


@Schema()
export class Event extends Document {
  @Prop({ required: true })
  titulo: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  categorias: string[];

  @Prop({ required: true })
  fecha: Date;

  @Prop({ type: [{type: Types.ObjectId, ref: 'People'}] })
  asistentes: Types.ObjectId[];

  @Prop({ required: true })
  conferencistas: string[];

  @Prop({ required: true })
  facultades_organizadoras: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
  comentarios?: Types.ObjectId[];
}

export const EventSchema = SchemaFactory.createForClass(Event);
