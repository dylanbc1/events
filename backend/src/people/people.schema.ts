import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Ciudad {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  departamento: string;

  @Prop({ required: true })
  pais: string;
}

@Schema()
export class People extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  nombre_usuario: string;

  @Prop({ required: true })
  nombre_completo: string;

  @Prop({ required: true })
  tipo_relacion: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, type: Ciudad })
  ciudad: Ciudad;

  @Prop({ required: true })
  es_empleado: boolean;
}

export const PeopleSchema = SchemaFactory.createForClass(People);
