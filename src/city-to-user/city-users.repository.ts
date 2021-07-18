import { EntityRepository, Repository } from 'typeorm';
import { CityToUser } from './city-user.entity';

@EntityRepository(CityToUser)
export class CityToUsersRepository extends Repository<CityToUser> {}
