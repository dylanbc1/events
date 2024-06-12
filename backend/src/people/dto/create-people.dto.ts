import { ValidateNested, IsString, IsArray, IsDateString, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

class CiudadDTO {
    @IsString()
    nombre: string;
  
    @IsString()
    departamento: string;
  
    @IsString()
    pais: string;
}

export class CreatePeopleDTO {
  @IsString()
  id: string;

  @IsString()
  nombre_usuario: string;

  @IsString()
  nombre_completo: string;

  @IsString()
  tipo_relacion: string;

  @IsString()
  email: string;

  @ValidateNested()
  @Type(() => CiudadDTO)
  ciudad: CiudadDTO;

  @IsBoolean()
  es_empleado: boolean;
}