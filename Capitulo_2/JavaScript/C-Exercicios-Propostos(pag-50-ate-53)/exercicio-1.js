const prompt = require('prompt-sync')()

let base = Number(prompt('Digite a base do triangulo:'))
let altura = Number(prompt('Digite a altura do triangulo:'))
areaTriangulo = (base*altura) / 2

console.log(`Area do Triangulo = ${areaTriangulo}`)