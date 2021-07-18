import { IsOptional, IsString } from 'class-validator';

export class GetCityDto {
  @IsOptional()
  @IsString()
  cityname?: string;
}
