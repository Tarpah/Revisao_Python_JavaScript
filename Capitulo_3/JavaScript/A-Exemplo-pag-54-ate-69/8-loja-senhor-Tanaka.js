const prompt = require('prompt-sync')()

const numeroCamisas = Number(prompt('Quantidade de camisas: '))
const valorCamisa = 12.50
let valorFinal = numeroCamisas * valorCamisa

if (numeroCamisas <= 5){
    valorFinal = valorFinal * (1 - (3/100))
}else{
    if (numeroCamisas <= 10){
        valorFinal = valorFinal * (1 - (5/100))
    }else{
        valorFinal = valorFinal * (1 - (7/100))
    }
}

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)
    