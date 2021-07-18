import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CitiesRepository } from './cities.repository';
import { CitiesService } from './cities.service';
import { CityToUsersService } from '../city-to-user/city-users.service';
import { CitiesController } from './cities.controller';
import { CityToUsersRepository } from 'src/city-to-user/city-users.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CitiesRepository]),
    TypeOrmModule.forFeature([CityToUsersRepository]),
    AuthModule,
  ],
  providers: [CitiesService, CityToUsersService],
  controllers: [CitiesController],
})
export class CitiesModule {}
