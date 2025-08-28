const prompt = require('prompt-sync')()

let raio = Number(prompt('Informe o raio da circunferencia:'))

let comprimentoCircunferencia = Number(2*Math.PI*raio)

console.log(`Comprimento da Circunferencia:${(comprimentoCircunferencia).toFixed(2)}`)