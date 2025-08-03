import { Module } from '@nestjs/common';
import { EntrenarController } from './entrenar.controller';
import { EntrenarService } from './entrenar.service';

@Module({
  controllers: [EntrenarController],
  providers: [EntrenarService]
})
export class EntrenarModule {}
