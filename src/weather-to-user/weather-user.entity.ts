import { User } from '../auth/user.entity';
import { Weather } from '../weathers/weather.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'weathers_users' })
export class WeatherToUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  theDate: Date;

  @Column()
  username: string;

  @ManyToOne(() => User, (user) => user.weatherToUsers, { primary: true })
  @JoinColumn([{ name: 'username', referencedColumnName: 'username' }]) // allow more
  user: User;

  @ManyToOne(() => Weather, (weather) => weather.weatherToUsers, {
    primary: true,
  })
  @JoinColumn([
    { name: 'city', referencedColumnName: 'city' },
    { name: 'theDate', referencedColumnName: 'theDate' },
  ]) // allow more
  weather: Weather;
}
