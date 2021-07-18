import { Injectable } from '@nestjs/common';
//import { CityCondition } from './city-condition.enum';
import { CreateCityDto } from './dto/create-city.dto';
import { GetCityDto } from './dto/get-city.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { CitiesRepository } from './cities.repository';
import { City } from './city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(CitiesRepository)
    private citiesRepository: CitiesRepository,
  ) {}

  async getCities(getCityDto: GetCityDto): Promise<City[]> {
    const { cityname } = getCityDto;
    if (cityname) {
      const cities = await this.citiesRepository.find({
        cityname,
      });
      return cities;
    }
    return await this.citiesRepository.find({});
  }

  async createCity(createCityDto: CreateCityDto): Promise<City> {
    const { cityname } = createCityDto;
    const city = this.citiesRepository.create({ cityname });

    await this.citiesRepository.save(city);
    return city;
  }
}
