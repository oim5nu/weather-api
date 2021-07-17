import { Controller, Get, Post, Patch, Body, Query } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { GetWeatherDto } from './dto/get-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
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

  @Patch()
  updateWeather(@Body() updateWeatherDto: UpdateWeatherDto) {
    // prettier-ignore
    return this.weathersService.updateWeather(updateWeatherDto);
  }
}
