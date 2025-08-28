const prompt = require('prompt-sync')()

let a = Number(prompt('Informe o valor de A:'))
let b = Number(prompt('Informe o valor de B:'))
let c = Number(prompt('Informe o valor de C:'))

let resultadoPositivo = (-b + Math.sqrt(b**2 -4*a*c))/2*a
let resultadoNegativo = (-b - Math.sqrt(b**2 -4*a*c))/2*a

console.log(`Equação de segundo grau positiva:${resultadoPositivo}`)
console.log(`Equação de segundo grau negativo:${resultadoNegativo}`)

