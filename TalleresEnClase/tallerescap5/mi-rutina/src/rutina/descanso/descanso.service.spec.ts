import { Test, TestingModule } from '@nestjs/testing';
import { DescansoService } from './descanso.service';

describe('DescansoService', () => {
  let service: DescansoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DescansoService],
    }).compile();

    service = module.get<DescansoService>(DescansoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
