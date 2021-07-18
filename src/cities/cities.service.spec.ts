import { Test, TestingModule } from '@nestjs/testing';
import { CitiesRepository } from './cities.repository';
import { CitiesService } from './cities.service';

const mockCitiesRepository = () => ({
  getCities: jest.fn(),
  findOne: jest.fn(),
  find: jest.fn(),
});

const mockUser = {
  id: 'mockId',
  username: 'mockUser',
  password: 'mockPassword',
  cityToUsers: [],
};
describe('CitiesService', () => {
  let citiesService: CitiesService;
  let citiesRepository: CitiesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CitiesService,
        {
          provide: CitiesRepository,
          useFactory: mockCitiesRepository,
        },
      ],
    }).compile();

    citiesService = module.get<CitiesService>(CitiesService);
    citiesRepository = module.get<CitiesRepository>(CitiesRepository);
  });

  describe('getCities', () => {
    it('should be defined', () => {
      expect(citiesService).toBeDefined();
    });
    // it('calls CitesService.getCities and returns the result', async () => {
    //   citiesService.getCities.mockResolvedValue('someValue');
    //   const result = await citiesService.getCities(null);
    // });
  });
});
