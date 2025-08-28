const prompt = require('prompt-sync')();

let base = Number(prompt("Digite a base: "))
let altura = Number(prompt("Digite a altura: "))
let area = base * altura

console.log(area)