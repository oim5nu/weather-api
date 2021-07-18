import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { WeathersController } from './weathers.controller';
import { WeathersRepository } from './weathers.repository';
import { WeathersService } from './weathers.service';

@Module({
  imports: [TypeOrmModule.forFeature([WeathersRepository]), AuthModule],
  controllers: [WeathersController],
  providers: [WeathersService],
})
export class WeathersModule {}
