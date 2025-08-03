import { Test, TestingModule } from '@nestjs/testing';
import { EntrenarService } from './entrenar.service';

describe('EntrenarService', () => {
  let service: EntrenarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrenarService],
    }).compile();

    service = module.get<EntrenarService>(EntrenarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
