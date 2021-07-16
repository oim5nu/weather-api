import { Injectable } from '@nestjs/common';
import { Weather, WeatherCondition } from './weather.model';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class WeathersService {
  private weathers: Weather[] = [
    {
      id: uuid(),
      theDate: '2021-07-16',
      city: 'Melbourne',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLOUDY,
    },
    {
      id: uuid(),
      theDate: '2021-07-17',
      city: 'Melbourne',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
    {
      id: uuid(),
      theDate: '2021-07-18',
      city: 'Melbourne',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-16',
      city: 'Keysborough',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-17',
      city: 'Keysborough',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.CLEAR,
    },
    {
      id: uuid(),
      theDate: '2021-07-18',
      city: 'Keysborough',
      temperature: '30',
      highestTemperature: '40',
      lowestTemperature: '20',
      condition: WeatherCondition.RAINING,
    },
  ];

  getAllWeathers(): Weather[] {
    return this.weathers;
  }

  createWeather(createWeatherDto: CreateWeatherDto): Weather {
    // prettier-ignore
    const { theDate, city, temperature, highestTemperature, lowestTemperature, condition } = createWeatherDto;
    // prettier-ignore
    const weather = { id: uuid(), theDate, city, temperature, highestTemperature, lowestTemperature, condition: condition as WeatherCondition, };
    this.weathers.push(weather);
    return weather;
  }

  getWeathersByCity(city: string): Weather[] {
    return this.weathers.filter((weather) =>
      weather.city.toLowerCase().includes(city.toLowerCase()),
    );
  }
}
