import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateWeatherDto, GetWeatherDto } from './dto/create-weather.dto';
import { WeathersService } from './weathers.service';

@Controller('weathers')
export class WeathersController {
  constructor(private weathersService: WeathersService) {}

  @Get()
  getAllWeathers(@Query() getWeatherDto: GetWeatherDto) {
    return this.weathersService.getAllWeathers(getWeatherDto);
  }

  @Post()
  createWeather(@Body() createWeatherDto: CreateWeatherDto) {
    // prettier-ignore
    return this.weathersService.createWeather(createWeatherDto);
  }
}
