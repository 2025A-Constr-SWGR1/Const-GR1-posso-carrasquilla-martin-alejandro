import { IsString, IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RecordatorioDto {
    @ApiProperty({ example: 'Revisar apuntes de Matemáticas' })
    @IsString()
    texto: string;

    @ApiProperty({ example: '2025-08-05T14:00:00.000Z' })
    @IsISO8601()
    fecha: string;
}
