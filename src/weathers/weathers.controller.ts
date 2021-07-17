import { Controller, Get, Post, Patch, Body, Query } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { GetWeatherDto } from './dto/get-weather.dto';
import {
  UpdateWeatherDto,
  UpdateWeatherQueryDto,
} from './dto/update-weather.dto';
import { WeathersService } from './weathers.service';
import { Weather } from './weather.entity';

@Controller('weathers')
export class WeathersController {
  constructor(private weathersService: WeathersService) {}

  @Get()
  getWeathers(@Query() getWeatherDto: GetWeatherDto): Promise<Weather[]> {
    return this.weathersService.getWeathers(getWeatherDto);
  }

  @Post()
  createWeather(@Body() createWeatherDto: CreateWeatherDto): Promise<Weather> {
    // prettier-ignore
    return this.weathersService.createWeather(createWeatherDto);
  }

  @Patch()
  updateWeather(
    @Query() updateWeatherQueryDto: UpdateWeatherQueryDto,
    @Body() updateWeatherDto: UpdateWeatherDto,
  ): Promise<Weather> {
    // prettier-ignore
    return this.weathersService.updateWeather(updateWeatherQueryDto, updateWeatherDto);
  }
}
