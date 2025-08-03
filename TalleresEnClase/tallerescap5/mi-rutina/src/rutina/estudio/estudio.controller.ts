import { Body, Controller, Get, Post } from '@nestjs/common';
import { EstudioService } from './estudio.service';

@Controller('rutina/estudio')
export class EstudioController {
    constructor(private readonly svc: EstudioService) { }

    @Post()
    crear(@Body('detalle') detalle: string) {
        return this.svc.añadirRegistro(detalle);
    }

    @Get()
    todos() {
        return this.svc.listarRegistros();
    }
}
