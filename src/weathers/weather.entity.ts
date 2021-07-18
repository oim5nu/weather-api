//import { WeatherToUser } from '../weather-to-user/weather-users.entity';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WeatherCondition } from './weather-condition.enum';
import { City } from 'src/cities/city.entity';

@Entity()
@Index(['cityname', 'theDate'], { unique: true })
//@Index(['city', 'seq'], { unique: true }) // Reserved
export class Weather {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  cityname!: string;

  @Column()
  theDate!: Date;

  @Column()
  seq!: number;

  @Column()
  temperature!: string;

  @Column()
  highestTemperature!: string;

  @Column()
  lowestTemperature!: string;

  @Column()
  weatherCondition!: WeatherCondition;

  @ManyToOne(() => City, (city) => city.weathers)
  city: City;
}
