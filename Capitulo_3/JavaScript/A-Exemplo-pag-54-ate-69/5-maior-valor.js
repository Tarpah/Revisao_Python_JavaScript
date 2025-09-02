
const prompt = require('prompt-sync')()

const numero1 = Number(prompt('Digite o número 1:'))
const numero2 = Number(prompt('Digite o número 2:'))
const numero3 = Number(prompt('Digite o número 3:'))

if(numero1 == numero2 || numero2 == numero3 || numero1 == numero3){
    return // Encerra o if
}else{
    if(numero1 > numero2 && numero1 > numero3){
        console.log('O primeiro numero é o maior')
    }else{ // Numero 1 já foi testado com todos os outros, sobrando apenas 2 e 3 
        if(numero2 > numero3){
            console.log('O segundo numero é o maior')
        }else{
            console.log('O terceiro numero é o maior')
        }
    }
}

