const prompt = require('prompt-sync')()

const num = Number(prompt('Digite um numero inteiro posivito:'))

if(num % 2 == 0){
    console.log('Par')
}else{
    console.log('Impar')
}