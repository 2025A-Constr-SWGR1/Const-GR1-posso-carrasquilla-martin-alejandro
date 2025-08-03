export * from './libreria-personal.module';
export * from './libreria-personal.service';

/** 
 * Toma un texto y devuelve las primeras N palabras
 * @param texto El texto a resumir
 * @param limite Nº de palabras
 */
export function resumenEfectivo(texto: string, limite: number): string {
    return texto.split(' ').slice(0, limite).join(' ') + '…';
}
