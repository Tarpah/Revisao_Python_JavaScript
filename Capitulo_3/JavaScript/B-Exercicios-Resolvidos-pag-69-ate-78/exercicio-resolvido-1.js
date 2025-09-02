const prompt = require('prompt-sync')(); 

console.log(`************************************************
        CÁLCULO DE GRANDEZAS ELÉTRICAS
************************************************
1. Tensão (em Volt)
2. Resistência (em Ohm)
3. Corrente (em Ampére)
************************************************`)

let resistencia
let corrente

opcao = Number(prompt('Qual grandeza deseja calcular?'))

switch(opcao){
    case 1:
        resistencia = Number(prompt('Informe a Resistência:'))
        corrente = Number(prompt('Informe a Corrente:'))
        console.log(`Tensão:${resistencia * corrente}V`)
        break;
    case 2:
        tensao = Number(prompt('Informe a Tensão:'))
        corrente = Number(prompt('Informe a Corrente:'))
        console.log(`Resistência:${tensao / corrente}Ω`)
        break;
    case 3:
        tensao = Number(prompt('Informe a Tensão:'))
        resistencia = Number(prompt('Informe a Resistência:'))
        console.log(`Corrente:${tensao / resistencia}A`)
        break;
    default:
        console.log('Opção inválida')
}