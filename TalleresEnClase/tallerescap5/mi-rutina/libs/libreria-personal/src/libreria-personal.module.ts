import { Module } from '@nestjs/common';
import { LibreriaPersonalService } from './libreria-personal.service';

@Module({
  providers: [LibreriaPersonalService],
  exports: [LibreriaPersonalService],
})
export class LibreriaPersonalModule {}
