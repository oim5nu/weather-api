import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { WeathersService } from './weathers.service';

@Controller('weathers')
export class WeathersController {
  constructor(private weathersService: WeathersService) {}

  @Get()
  getAllWeathers() {
    return this.weathersService.getAllWeathers();
  }

  @Post()
  createWeather(@Body() createWeatherDto: CreateWeatherDto) {
    // prettier-ignore
    return this.weathersService.createWeather(createWeatherDto);
  }

  @Get()
  getWeathersByCity(@Query('city') city:string ) {
    return this.weathersService.getWeathersByCity(city);
  }
}
