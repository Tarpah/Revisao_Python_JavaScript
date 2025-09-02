const prompt = require('prompt-sync')()

const alt1 = Number(prompt('Altura 1: '))
const alt2 = Number(prompt('Altura 2: '))
const alt3 = Number(prompt('Altura 3: '))

let maior
let mediana
let menor
let temp

if (alt1 > alt2 && alt1 > alt3){
    maior = alt1
    mediana = alt2
    menor = alt3
}else if(alt2 > alt3){
    maior = alt2
    mediana = alt3
    menor = alt1
    console.log('Teste else if')
}else{
    maior = alt3
    mediana = alt2
    menor = alt1
}

// Inversão se necessário
if(menor > mediana){
    temp = menor
    menor = mediana
    mediana = temp
}

console.log(`Maior:${maior}`)
console.log(`Mediana:${mediana}`)
console.log(`Menor:${menor}`)
