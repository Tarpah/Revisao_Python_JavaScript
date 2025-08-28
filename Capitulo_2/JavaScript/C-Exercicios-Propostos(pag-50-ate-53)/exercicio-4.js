const prompt = require('prompt-sync')()

velocidadeMedia = Number(prompt('Digite a velocidade média em km/h:'))
console.log(`Velocidade média convertida para m/s:${(velocidadeMedia/3.6).toFixed(2)} m/s`)