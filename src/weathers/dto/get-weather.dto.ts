import { IsOptional, IsString } from 'class-validator';

export class GetWeatherDto {
  @IsOptional()
  @IsString()
  city?: string;
}
