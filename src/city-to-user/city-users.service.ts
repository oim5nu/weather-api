import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityUserPayload } from './city-user-payload.interface';
import { CityToUsersRepository } from './city-users.repository';
import { CityToUser } from './city-user.entity';

@Injectable()
export class CityToUsersService {
  constructor(
    @InjectRepository(CityToUsersRepository)
    private cityToUsersRepository: CityToUsersRepository,
  ) {}

  // async getWeathers(getWeatherDto: GetWeatherDto): Promise<Weather[]> {
  //   if (getWeatherDto?.cityname) {
  //     const weathers = await this.weathersRepository.find({
  //       cityname: getWeatherDto.cityname,
  //     });
  //     return weathers;
  //   }
  //   return await this.weathersRepository.find({});
  // }

  async shortlistCity(payload: CityUserPayload): Promise<CityToUser> {
    // prettier-ignore
    const { username, cityname } = payload;
    // prettier-ignore
    const cityToUser = this.cityToUsersRepository.create({
      cityname, username,
    });

    await this.cityToUsersRepository.save(cityToUser);
    return cityToUser;
  }
}
