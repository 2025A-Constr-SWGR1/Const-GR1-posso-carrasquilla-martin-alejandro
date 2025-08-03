import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudioService {
    private registros: { fecha: string; detalle: string }[] = [];

    añadirRegistro(detalle: string) {
        this.registros.push({ fecha: new Date().toISOString(), detalle });
        return this.registros;
    }

    listarRegistros() {
        return this.registros;
    }
}
