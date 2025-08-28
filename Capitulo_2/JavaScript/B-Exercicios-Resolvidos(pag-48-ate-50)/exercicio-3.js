const prompt = require('prompt-sync')();
let raio = Number(prompt('Digite o valor do raio:'))
let area = Math.PI * raio**2

console.log(`A área de convivência é:${area}`)
