const paqueteSuma = require('2025a-swgr1-mapc-suma');
const paqueteMultiplicacion = require('2025a-swgr1-enmo-multiplicacion');
const paqueteResta = require('2025a-swgr1-smvv-resta')

const respuestaSuma = paqueteSuma.suma(1, 2);
const respuestaMult = paqueteMultiplicacion.multiplicacion(3, 5);
const respuestaResta = paqueteResta.resta(7,2)

console.log('La respuesta de la suma es: ', respuestaSuma);
console.log('La respuesta de la multiplicacion es: ', respuestaMult);
console.log('La resputesa de la resta es: ', respuestaResta);