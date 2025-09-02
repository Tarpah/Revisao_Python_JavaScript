prompt = require('prompt-sync')();

console.log(`
**** TABELA VERDADE ****
    1.  Operador AND
    2.  Operador OR
    3.  Operador NOT
**************************
`)

const opcao = Number(prompt('Escolha uma opção:'))
let num1
let num2


switch (opcao){
    case 1:
        num1 = Number(prompt('Digite o valor do numero 1:'))
        num2 = Number(prompt('Digite o valor do numero 2:'))
        console.log(num1 && num2)
        break

    case 2:
        num1 = Number(prompt('Digite o valor do numero 1:'))
        num2 = Number(prompt('Digite o valor do numero 2:'))
        console.log(num1 || num2)
        break
    case 3:
        num1 = Number(prompt('Digite o valor do numero:'))
        console.log(Number(!num1))
        break
    default:
        console.log('Opção Inválida')
}

