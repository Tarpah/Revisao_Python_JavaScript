const prompt = require('prompt-sync')()

let numero1 = Number(prompt('Digite o primeiro numero:') )
let numero2 = Number(prompt('Digite o segundo numero:') )

console.log(`Soma dos valores:${numero1+numero2}`)
console.log(`Produto dos valores:${numero1*numero2}`)