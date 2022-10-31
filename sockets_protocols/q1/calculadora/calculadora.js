module.exports = function (mensagem) {
    const numero1 = parseInt(mensagem[0])
    const numero2 = parseInt(mensagem[1])
    const operacao = mensagem[2]
    let resultado;
    switch (operacao) {
        case "+":
            
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            resultado = numero1 / numero2;
            break;
        default:
            console.log(`Sorry, we are out of ${operacao}.`);
    }
    return resultado;
}

