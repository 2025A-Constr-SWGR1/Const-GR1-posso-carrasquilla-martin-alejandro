import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonalService } from './personal.service';
import { RecordatorioDto } from './recordatorio.dto';

@ApiTags('personal')
@Controller('personal')
export class PersonalController {
    constructor(private readonly svc: PersonalService) { }

    @Get('disponibilidad')
    @ApiOperation({ summary: 'Consulta si estoy disponible ahora' })
    @ApiResponse({ status: 200, description: 'Estado de disponibilidad.' })
    getDisponibilidad() {
        return this.svc.getDisponibilidad();
    }

    @Get('concentracion')
    @ApiOperation({ summary: 'Nivel de concentración actual' })
    @ApiResponse({ status: 200, description: 'Nivel entre 1 y 10.' })
    getConcentracion() {
        return this.svc.getConcentracion();
    }

    @Post('recordatorios')
    @ApiOperation({ summary: 'Añadir un nuevo recordatorio' })
    @ApiResponse({ status: 201, description: 'Lista de recordatorios actualizada.' })
    addRecordatorio(@Body() dto: RecordatorioDto) {
        return this.svc.addRecordatorio(dto);
    }

    @Get('recordatorios')
    @ApiOperation({ summary: 'Listar todos los recordatorios' })
    @ApiResponse({ status: 200, description: 'Array de recordatorios.' })
    listRecordatorios() {
        return this.svc.listRecordatorios();
    }

    @Get('energia')
    @ApiOperation({ summary: 'Nivel de energía actual (%)' })
    getEnergia() {
        return this.svc.getEnergia();
    }

}
