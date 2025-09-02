const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Informe a nota do bimestre 1 (0-100): '))
let nota2 = Number(prompt('Informe a nota do bimestre 1 (0-100): '))
let media = (nota1+nota2)/2
let estado_Aprovacao = media >= 60
console.log(estado_Aprovacao)