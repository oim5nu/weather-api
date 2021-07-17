import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { WeatherCondition } from '../weather-condition.enum';
export class UpdateWeatherQueryDto {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsDateString()
  theDate: Date;
}
export class UpdateWeatherDto {
  @IsOptional()
  @IsDateString()
  theDate?: Date;

  @IsOptional()
  @IsNumberString()
  seq?: number;

  @IsOptional()
  @IsString()
  temperature?: string;

  @IsOptional()
  @IsString()
  highestTemperature?: string;

  @IsOptional()
  @IsString()
  lowestTemperature?: string;

  @IsOptional()
  @IsEnum(WeatherCondition)
  weatherCondition?: WeatherCondition;
}
