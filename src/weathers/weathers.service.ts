import { Injectable } from '@nestjs/common';
import { Weather, WeatherCondition } from './weather.model';
import { CreateWeatherDto, GetWeatherDto } from './dto/create-weather.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class WeathersService {
  private weathers: Weather[] = [
    {
      id: uuid(),
      theDate: '2021-07-16',
      city: 'Melbourne',
      sequence: '1',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLOUDY,
    },
    {
      id: uuid(),
      theDate: '2021-07-17',
      city: 'Melbourne',
      sequence: '2',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
    {
      id: uuid(),
      theDate: '2021-07-18',
      city: 'Melbourne',
      sequence: '3',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-16',
      city: 'Keysborough',
      sequence: '1',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-17',
      city: 'Keysborough',
      sequence: '2',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-18',
      city: 'Keysborough',
      sequence: '3',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
  ];

  getAllWeathers(getWeatherDto: GetWeatherDto): Weather[] {
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
}
