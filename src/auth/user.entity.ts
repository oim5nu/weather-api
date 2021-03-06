import { CityToUser } from '../city-to-user/city-user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  // @OneToMany(() => WeatherToUser, (weatherToUser) => weatherToUser.user)
  // weatherToUsers!: WeatherToUser[];

  @OneToMany(() => CityToUser, (cityToUser) => cityToUser.user)
  cityToUsers!: CityToUser[];
}
