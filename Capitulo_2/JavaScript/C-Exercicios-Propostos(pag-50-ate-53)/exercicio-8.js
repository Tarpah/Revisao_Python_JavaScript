const prompt = require('prompt-sync')()

let salarioMinimoAtual = Number(prompt(('Digite o valor do salário minimo atual:')))
let salarioMensalFuncionario = Number(prompt('Digite seu salário atual:'))

console.log(`Seu salário atual é: ${(salarioMensalFuncionario/salarioMinimoAtual).toFixed(2)} salários minimos.`)