import { EntityRepository, Repository } from 'typeorm';
import { Weather } from './weather.entity';

@EntityRepository(Weather)
export class WeathersRepository extends Repository<Weather> {}
