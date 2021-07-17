import { Injectable, NotFoundException } from '@nestjs/common';
import { Weather, WeatherCondition } from './weather.model';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { GetWeatherDto } from './dto/get-weather.dto';
import {
  UpdateWeatherDto,
  UpdateWeatherQueryDto,
} from './dto/update-weather.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class WeathersService {
  private weathers: Weather[] = [
    {
      id: uuid(),
      theDate: new Date('2021-07-16'),
      city: 'Melbourne',
      sequence: 0,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLOUDY,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-17'),
      city: 'Melbourne',
      sequence: 1,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-18'),
      city: 'Melbourne',
      sequence: 2,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-19'),
      city: 'Melbourne',
      sequence: 3,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-16'),
      city: 'Keysborough',
      sequence: 0,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-17'),
      city: 'Keysborough',
      sequence: 1,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-18'),
      city: 'Keysborough',
      sequence: 2,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
    {
      id: uuid(),
      theDate: new Date('2021-07-19'),
      city: 'Keysborough',
      sequence: 3,
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
  ];

  getWeathers(getWeatherDto: GetWeatherDto): Weather[] {
    if (getWeatherDto?.city) {
      return this.weathers.filter((weather) =>
        weather.city.toLowerCase().includes(getWeatherDto.city.toLowerCase()),
      );
    }
    return this.weathers;
  }

  createWeather(createWeatherDto: CreateWeatherDto): Weather {
    // prettier-ignore
    const { theDate, city, sequence, temperature, highestTemperature, lowestTemperature, condition } = createWeatherDto;
    // prettier-ignore
    const weather = { id: uuid(), theDate, city, sequence, temperature, highestTemperature, lowestTemperature, condition: condition as WeatherCondition, };
    this.weathers.push(weather);
    return weather;
  }

  updateWeather(
    updateWeatherQueryDto: UpdateWeatherQueryDto,
    updateWeatherDto: UpdateWeatherDto,
  ): Weather {
    const { city, theDate } = updateWeatherQueryDto;
    // prettier-ignore
    const { theDate: newDate, temperature, highestTemperature, lowestTemperature, condition } = updateWeatherDto;
    // prettier-ignore
    // const weather = { id: uuid(), theDate, city, sequence, temperature, highestTemperature, lowestTemperature, condition: condition as WeatherCondition, };
    // this.weathers.push(weather);
    const index = this.weathers.findIndex(weather => weather.city === city && weather.theDate === theDate)
    if (index >= 0) {
      this.weathers[index] = {
        ...this.weathers[index],
        theDate: newDate ? newDate : this.weathers[index].theDate,
        temperature: temperature
          ? temperature
          : this.weathers[index].temperature,
        highestTemperature: highestTemperature
          ? highestTemperature
          : this.weathers[index].highestTemperature,
        lowestTemperature: lowestTemperature
          ? lowestTemperature
          : this.weathers[index].lowestTemperature,
        condition: condition
          ? (condition as WeatherCondition)
          : this.weathers[index].condition,
      };
      return this.weathers[index];
    } else {
      throw new NotFoundException();
    }
  }
}
