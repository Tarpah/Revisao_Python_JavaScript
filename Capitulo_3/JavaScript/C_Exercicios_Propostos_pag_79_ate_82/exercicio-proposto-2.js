const prompt = require('prompt-sync')()

const num1 = prompt('Digite o primeiro numero positivo:')
const num2 = prompt('Digite o segundo numero positivo:')

console.log(`
1. Média ponderada, com pesos 2 e 3, respectivamente
2. Quadrado da soma dos 2 números
3. Cubo do menor número`)

const opcao = Number(prompt('Escolha uma opção:'))

switch (opcao){
    case 1:
        console.log(`Média Ponderada:${(num1*2+num2*3)/5}`)
        break

    case 2:
        console.log(`Quadrado da soma dos 2 números:${num1**2 + num2**2}`)
        break

    case 3:
        num1<num2 ? console.log(`Cubo do menor número:${num1**3}`):console.log(`Cubo do menor número:${num2**3}`)

        
        break
    
    default:
        console.log('Opção inválida')
        break
}
