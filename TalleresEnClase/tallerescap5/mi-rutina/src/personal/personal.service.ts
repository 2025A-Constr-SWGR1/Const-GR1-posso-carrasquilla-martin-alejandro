import { Injectable } from '@nestjs/common';
import { RecordatorioDto } from './recordatorio.dto';

@Injectable()
export class PersonalService {
    private recordatorios: RecordatorioDto[] = [];

    getDisponibilidad(): { disponible: boolean; mensaje: string } {
        const hora = new Date().getHours();
        return {
            disponible: hora >= 9 && hora <= 18,
            mensaje: hora >= 9 && hora <= 18 ? 'Estoy trabajando' : 'No disponible ahora'
        };
    }

    getConcentracion(): { nivel: number } {
        // Nivel ficticio entre 1 y 10
        return { nivel: Math.floor(Math.random() * 10) + 1 };
    }

    addRecordatorio(dto: RecordatorioDto): RecordatorioDto[] {
        this.recordatorios.push(dto);
        return this.recordatorios;
    }

    listRecordatorios(): RecordatorioDto[] {
        return this.recordatorios;
    }
}
