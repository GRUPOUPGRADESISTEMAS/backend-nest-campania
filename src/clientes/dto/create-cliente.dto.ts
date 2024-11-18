import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  dni: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  profesion: string;

  @IsNotEmpty()
  @IsString()
  cargo: string;
}

