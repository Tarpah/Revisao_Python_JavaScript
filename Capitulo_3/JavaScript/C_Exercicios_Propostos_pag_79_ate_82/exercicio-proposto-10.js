const prompt = require('prompt-sync')()

const peso = prompt('Peso:')
const altura = prompt('Altura:')

const IMC = (10000*(peso / (altura**2))).toFixed(2)

console.log(`\nIMC:${IMC}`)

if(IMC <= 18.5){
    return console.log('Abaixo do Peso')
}else if(IMC > 18.5 && IMC <25){
    return console.log('Peso Normal')
}else if(IMC >= 25 && IMC <30){
    return console.log('Sobrepeso')
}else if(IMC >= 30 && IMC <35){
    return console.log('Obesidade grau 1')
}else if(IMC >= 35 && IMC <40){
    return console.log('Obesidade grau 2')
}else if(IMC >= 40){
    return console.log('Obesidade grau 3')
}else{
    return console.log('Tem algo muito errado')
}