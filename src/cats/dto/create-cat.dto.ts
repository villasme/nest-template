import { IsString, IsBoolean } from 'class-validator';

export class CreateCatDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsBoolean()
  readonly isActive: boolean;
}