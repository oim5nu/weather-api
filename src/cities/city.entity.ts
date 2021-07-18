import { CityToUser } from '../city-to-user/city-user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Weather } from 'src/weathers/weather.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  cityname!: string;

  @OneToMany(() => CityToUser, (cityToUser) => cityToUser.city)
  cityToUsers!: CityToUser[];

  @OneToMany(() => Weather, (weather) => weather.city)
  weathers: Weather[];
}
