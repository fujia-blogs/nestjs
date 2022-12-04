import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsNotEmpty()
  @IsString()
  email: string;
}
