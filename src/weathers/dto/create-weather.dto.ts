import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsDateString,
  IsNumberString,
} from 'class-validator';
import { WeatherCondition } from '../weather.model';

export class CreateWeatherDto {
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsNumberString()
  sequence: number;

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
  condition: WeatherCondition;
}
