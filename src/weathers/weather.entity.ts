import { WeatherToUser } from '../weather-to-user/weather-user.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { WeatherCondition } from './weather-condition.enum';

@Entity()
@Index(['city', 'theDate'], { unique: true })
//@Index(['city', 'seq'], { unique: true }) // Reserved
export class Weather {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  theDate: Date;

  @Column()
  seq: number;

  @Column()
  temperature: string;

  @Column()
  highestTemperature: string;

  @Column()
  lowestTemperature: string;

  @Column()
  weatherCondition: WeatherCondition;

  @OneToMany(() => WeatherToUser, (weatherToUser) => weatherToUser.weather)
  weatherToUsers: WeatherToUser[];
}
