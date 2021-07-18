import { User } from '../auth/user.entity';
import { City } from '../cities/city.entity';
import {
  Column,
  Index,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'cities_users' })
@Index(['username', 'cityname'], { unique: true })
export class CityToUser {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  cityname!: string;

  @Column()
  username!: string;

  @Column({ default: false })
  isDefault: boolean;

  @ManyToOne(() => User, (user) => user.cityToUsers)
  @JoinColumn([{ name: 'username', referencedColumnName: 'username' }])
  user!: User;

  @ManyToOne(() => City, (city) => city.cityToUsers)
  @JoinColumn([{ name: 'cityname', referencedColumnName: 'cityname' }])
  city!: City;
}
