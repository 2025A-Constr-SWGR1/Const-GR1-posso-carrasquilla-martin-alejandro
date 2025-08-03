import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudioModule } from './rutina/estudio/estudio.module';
import { EntrenarModule } from './rutina/entrenar/entrenar.module';
import { DescansoModule } from './rutina/descanso/descanso.module';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [EstudioModule, EntrenarModule, DescansoModule, PersonalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
