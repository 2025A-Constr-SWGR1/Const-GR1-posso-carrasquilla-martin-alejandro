const paqueteSuma = require('2025a-swgr1-mapc-suma');
const paqueteResta = require('2025a-swgr1-smvv-resta');
const paqueteMultiplicacion = require('2025a-swgr1-enmo-multiplicacion');
const paqueteDivision = require('2025a-swgr1-enmo-division');

const respuestaSuma = paqueteSuma.suma(2,1);
const respuestaResta = paqueteResta.resta(3,2);
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(2,5);
const respuestaDivision = paqueteDivision.division(9,3);

console.log('La respuesta de la suma es: ', respuestaSuma);
console.log('La respuesta de la resta es: ', respuestaResta);
console.log('La respuesta de la multiplicacion es: ', respuestaMultiplicacion);
console.log('La respuesta de la division es: ', respuestaDivision);
