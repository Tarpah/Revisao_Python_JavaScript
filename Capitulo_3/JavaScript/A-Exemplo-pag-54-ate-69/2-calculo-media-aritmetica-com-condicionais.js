const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Informe a nota do bimestre 1 (0-100): '))
let nota2 = Number(prompt('Informe a nota do bimestre 1 (0-100): '))
let media = (nota1+nota2)/2

if (media >= 60){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

media >= 60 ? console.log('Aprovado - Ternário') : console.log('Reprovado - Ternário') // Versão em operador ternário pq sim