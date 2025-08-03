import { Test, TestingModule } from '@nestjs/testing';
import { LibreriaPersonalService } from './libreria-personal.service';

describe('LibreriaPersonalService', () => {
  let service: LibreriaPersonalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibreriaPersonalService],
    }).compile();

    service = module.get<LibreriaPersonalService>(LibreriaPersonalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
