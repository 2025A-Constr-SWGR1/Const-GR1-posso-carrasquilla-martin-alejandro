import { Test, TestingModule } from '@nestjs/testing';
import { EntrenarController } from './entrenar.controller';

describe('EntrenarController', () => {
  let controller: EntrenarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrenarController],
    }).compile();

    controller = module.get<EntrenarController>(EntrenarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
