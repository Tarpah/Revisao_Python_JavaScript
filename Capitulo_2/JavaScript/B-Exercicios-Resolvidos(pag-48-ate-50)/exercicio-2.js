const prompt = require('prompt-sync')();
let variacaoDeslocamento = Number(prompt('Digite a variação em metros do objeto:'))
let variacaoTempo = Number(prompt('Digite o tempo em segundos do objeto:'))

velMedia = variacaoDeslocamento/variacaoTempo
console.log(`O objeto se move a ${velMedia} m/s!`)
// pag 49