import { IsEmpty, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmpty()
  @ApiProperty()
  username: string;
  @IsEmpty()
  @ApiProperty()
  password: string;
  @IsEmpty()
  @ApiProperty()
  fullName: string;
}
