const prompt = require('prompt-sync')(); 

// ponto1
const x1 = Number(prompt('Informe o valor de x1:'))
const y1 = Number(prompt('Informe o valor de y1:'))
// ponto2
const x2 = Number(prompt('Informe o valor de x2:'))
const y2 = Number(prompt('Informe o valor de y2:'))
// ponto3
const x3 = Number(prompt('Informe o valor de x3:'))
const y3 = Number(prompt('Informe o valor de y3:'))

// lados
const lado1 = Math.sqrt(((x2-x1)**2) + ((y2-y1) **2)) // lado p1 - p2
const lado2 = Math.sqrt(((x3-x1)**2) + ((y3-y1) **2)) // lado p1 - p3
const lado3 = Math.sqrt(((x3-x2)**2) + ((y3-y2) **2)) // lado p2 - p3

let condicao1 = false
let condicao2 = false
let condicao3 = false

if (lado1>0 && lado2>0 && lado3>0) { // condição 1 algum lado menor ou igual a 0
    condicao1=true
}

if ((lado1 < (lado2+lado3)) &&  (lado2 < (lado1+lado3)) && (lado3 < (lado1+lado2))){ // condição 2 algum lado for maior que os outros dois somados
    condicao2=true
}
if (lado1 > Math.abs(lado2-lado3) && lado2 > Math.abs(lado1-lado3) && lado3 > Math.abs(lado1-lado2)){ // condição 3 algum lado for maior que a diferença dos outros dois
    condicao3=true
}


if (condicao1 && condicao2 && condicao3){
    console.log('Formou Triangulo')

    // Categorização
    if (lado1 == lado2 && lado2 == lado3){
        console.log('Triangulo Equilátero.')
    }
    else if (((lado1 == lado2) && (lado1 != lado3)) || ((lado2 == lado3) && (lado2 != lado1)) || (lado3 == lado1 && lado3 != lado2)){
        console.log('Triangulo Isósceles')
    }
    else{
        console.log('Triangulo Escaleno')
    }
}
else{
    console.log('Nenhum triângulo formado com os pontos informados')
}
