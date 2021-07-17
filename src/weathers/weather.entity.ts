import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WeatherCondition } from './weather-condition.enum';

@Entity()
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
}
