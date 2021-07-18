import { Injectable } from '@nestjs/common';
//import { WeatherCondition } from './weather-condition.enum';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { GetWeatherDto } from './dto/get-weather.dto';
import {
  UpdateWeatherDto,
  UpdateWeatherQueryDto,
} from './dto/update-weather.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WeathersRepository } from './weathers.repository';
import { Weather } from './weather.entity';

@Injectable()
export class WeathersService {
  constructor(
    @InjectRepository(WeathersRepository)
    private weathersRepository: WeathersRepository,
  ) {}

  async getWeathers(getWeatherDto: GetWeatherDto): Promise<Weather[]> {
    if (getWeatherDto?.cityname) {
      const weathers = await this.weathersRepository.find({
        cityname: getWeatherDto.cityname,
      });
      return weathers;
    }
    return await this.weathersRepository.find({});
  }

  async createWeather(createWeatherDto: CreateWeatherDto): Promise<Weather> {
    // prettier-ignore
    const { theDate, cityname, seq, temperature, highestTemperature, lowestTemperature, weatherCondition } = createWeatherDto;
    // prettier-ignore
    const weather = this.weathersRepository.create({
      theDate, cityname, seq, temperature, highestTemperature, lowestTemperature, weatherCondition,
    });

    await this.weathersRepository.save(weather);
    return weather;
  }

  async updateWeather(
    updateWeatherQueryDto: UpdateWeatherQueryDto,
    updateWeatherDto: UpdateWeatherDto,
  ): Promise<Weather> {
    const { city, theDate } = updateWeatherQueryDto;
    // prettier-ignore
    const { theDate: newDate, seq, temperature, highestTemperature, lowestTemperature, weatherCondition } = updateWeatherDto;

    const updateArgs: any = {};

    if (newDate) updateArgs.theDate = newDate;

    if (seq) updateArgs.seq = seq;
    if (temperature) updateArgs.temperature = temperature;
    if (highestTemperature) updateArgs.highestTemperature = highestTemperature;
    if (lowestTemperature) updateArgs.lowestTemperature = lowestTemperature;
    if (weatherCondition) updateArgs.weatherCondition = weatherCondition;

    await this.weathersRepository
      .createQueryBuilder()
      .update('weather')
      .set(updateArgs)
      .where('weather.city = :city', { city })
      .andWhere(`DATE_TRUNC('day', weather."theDate") = :theDate`, { theDate })
      .execute();
    const weather = await this.weathersRepository
      .createQueryBuilder('weather')
      .where('weather.city = :city', { city })
      .andWhere(`DATE_TRUNC('day', weather."theDate") = :theDate`, {
        theDate: newDate ? newDate : theDate,
      })
      .getOne();
    return weather;
  }
}
