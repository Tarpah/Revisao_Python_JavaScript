const prompt = require('prompt-sync')();

const valor = prompt('Numero: ')
if(valor % 2 == 0){
    console.log('O valor é par')
}else{
    console.log('O valor é impar')
}