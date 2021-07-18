import { EntityRepository, Repository } from 'typeorm';
import { City } from './city.entity';

@EntityRepository(City)
export class CitiesRepository extends Repository<City> {}
