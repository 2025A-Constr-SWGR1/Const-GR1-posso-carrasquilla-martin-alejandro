import { Test, TestingModule } from '@nestjs/testing';
import { DescansoController } from './descanso.controller';

describe('DescansoController', () => {
  let controller: DescansoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DescansoController],
    }).compile();

    controller = module.get<DescansoController>(DescansoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
