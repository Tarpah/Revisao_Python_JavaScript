const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite o primeiro numero:'))
let numero2 = Number(prompt('Digite o segundo numero:'))

console.log(`Cubo do segundo número ${numero2**3}`)
console.log(`Média geométrica ${Math.sqrt(numero1*numero2)}`)