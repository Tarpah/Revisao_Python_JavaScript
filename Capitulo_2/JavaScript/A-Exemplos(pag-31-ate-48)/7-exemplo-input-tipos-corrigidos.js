const prompt = require('prompt-sync')();

let aluno =  prompt('Digite seu nome:')
let periodoCorrente = Number(prompt('Digite o periodo corrente: '))
let ira = Number(prompt('Digite seu IRA: '))
let laurea = Boolean(prompt('Digite Informe se você é o laureado da turma:'))


console.log(typeof(aluno))
console.log(typeof(periodoCorrente))
console.log(typeof(ira))
console.log(typeof(laurea))