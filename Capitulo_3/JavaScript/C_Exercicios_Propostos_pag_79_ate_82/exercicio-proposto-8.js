const prompt = require('prompt-sync')();

const a = prompt('Digite o valor de A: ')
const b = prompt('Digite o valor de B: ')
const c = prompt('Digite o valor de C: ')

const descriminante = (b**2) - (4*a*c)

if(descriminante > 0){
    console.log(`\nDescriminante:${descriminante}`)
    console.log(`X:Positivo = ${(-b + Math.sqrt(descriminante))/(2*a)}`)
    console.log(`X:Negativo = ${(-b - Math.sqrt(descriminante))/(2*a)}`)
}else{
    console.log(`\nDescriminante:${descriminante}`)
    console.log('Não existem raízes reais')
}

