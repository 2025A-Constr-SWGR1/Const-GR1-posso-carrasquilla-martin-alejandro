import { Module } from '@nestjs/common';
import { DescansoController } from './descanso.controller';
import { DescansoService } from './descanso.service';

@Module({
  controllers: [DescansoController],
  providers: [DescansoService]
})
export class DescansoModule {}
