import { IsString, IsArray, IsDateString } from 'class-validator';


class LugarDTO {
  @IsString()
  lugar: string;
}


export class CreateEventDto {
  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsArray()
  @IsString({ each: true })
  categorias: string[];

  @IsDateString()
  fecha: string;

  @IsArray()
  @IsString({ each: true })
  asistentes: string[];

  @IsArray()
  @IsString({ each: true })
  conferencistas: string[];

  @IsArray()
  @IsString({ each: true })
  facultades_organizadoras: string[];

}
