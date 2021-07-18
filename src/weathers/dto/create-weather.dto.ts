import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsDateString,
  IsNumberString,
} from 'class-validator';
import { WeatherCondition } from '../weather-condition.enum';

export class CreateWeatherDto {
  @IsNotEmpty()
  @IsString()
  cityname: string;

  @IsNotEmpty()
  @IsNumberString()
  seq: number;

  @IsNotEmpty()
  @IsDateString()
  theDate: Date;

  @IsNotEmpty()
  @IsString()
  temperature: string;

  @IsNotEmpty()
  @IsString()
  highestTemperature: string;

  @IsNotEmpty()
  @IsString()
  lowestTemperature: string;

  @IsNotEmpty()
  @IsEnum(WeatherCondition)
  weatherCondition: WeatherCondition;
}
