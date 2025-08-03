exports.division = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    if (isNaN(numeroUno) || isNaN(numeroDos)) {
        throw new Error('No son numeros validos')
    }else if(numeroDosCasteado === 0){
        throw new Error('Division para 0 no es valida')
    }
    return numeroUnoCasteado / numeroDosCasteado;
}