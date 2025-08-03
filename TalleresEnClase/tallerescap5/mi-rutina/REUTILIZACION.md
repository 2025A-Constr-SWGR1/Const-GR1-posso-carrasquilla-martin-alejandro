# Reutilización vs Adaptación

## Ejemplos de reutilización

- **class-validator** y **Swagger**:
  - Claridad: Funciona “out-of-the-box”
  - Adaptación: pocos ajustes
  - Resultado: validación y docs rápidos

- **Técnica Pomodoro** de YouTube:
  - No adapté pausas largas → deuda técnica

- **Snippet de guard JWT** de internet:
  - No entendí bien el flujo → bugs al autenticar

## Criterios de evaluación

1. **Claridad**: ¿Entendí cómo funciona sin leer 10 tutoriales?  
2. **Costo de integración**: ¿Cuánto tiempo tardé en adaptarlo?  
3. **Beneficio**: ¿Me ahorró más de lo que me costó configurarlo?

## Conclusión

Reutilizar librerías estándar (class-validator, Swagger, JWT) ahorra tiempo y reduce errores; pero copiar snippets sin entenderlos genera deuda técnica.

## Recomendaciones

- Reusar librerías consolidadas (~70% del código).  
- Reimplementar sólo lo necesario (~30%) para mantener control.  
- Documentar siempre el “por qué” de cada pieza reutilizada.

