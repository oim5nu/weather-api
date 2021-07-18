import { IsNotEmpty, IsString } from 'class-validator';

export class ShortlistCityDto {
  @IsNotEmpty()
  @IsString()
  cityname: string;
}
