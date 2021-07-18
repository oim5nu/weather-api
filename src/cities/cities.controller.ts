// prettier-ignore
import { Controller, Get, Post, Body, Query, UseGuards, } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { GetCityDto } from './dto/get-city.dto';
import { CitiesService } from './cities.service';
import { City } from './city.entity';
import { AuthGuard } from '@nestjs/passport';
import { ShortlistCityDto } from './dto/shortlist-city.dto';
import { CityToUser } from 'src/city-to-user/city-user.entity';
import { CityToUsersService } from 'src/city-to-user/city-users.service';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('cities')
@UseGuards(AuthGuard())
export class CitiesController {
  constructor(
    private citiesService: CitiesService,
    private cityToUsersService: CityToUsersService,
  ) {}

  @Get()
  getCities(@Query() getCityDto: GetCityDto): Promise<City[]> {
    return this.citiesService.getCities(getCityDto);
  }

  @Post()
  createCity(@Body() createCityDto: CreateCityDto): Promise<City> {
    // prettier-ignore
    return this.citiesService.createCity(createCityDto);
  }

  @Post('/shortlist')
  @UseGuards(AuthGuard())
  shortlistCity(
    @Body() shortlistCityDto: ShortlistCityDto,
    @GetUser() user,
  ): Promise<CityToUser> {
    const { cityname } = shortlistCityDto;
    const { username } = user;
    return this.cityToUsersService.shortlistCity({ cityname, username });
  }
}
