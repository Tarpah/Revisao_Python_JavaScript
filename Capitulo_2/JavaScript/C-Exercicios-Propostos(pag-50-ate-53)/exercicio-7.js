let prompt = require('prompt-sync')()

let salarioBase = 1500
let nomeCorretor = prompt('Nome do Corretor:')
let qntImoveisVendidos = Number(prompt('Quantidade de imóveis vendidos:'))
let valorTotalVendas = Number(prompt('Valor total em vendas do vendedor:'))

salarioBase = salarioBase + (200 * qntImoveisVendidos) + (5/100 * valorTotalVendas)
console.log(`Salario de ${nomeCorretor}: ${salarioBase}`)
