const prompt = require('prompt-sync')();

const usuario = prompt('Digite seu usuario:')
const senha = prompt('Digite sua senha:')

if (usuario == 'procopio' && senha == '12345'){
    console.log('Seja bem vindo!')
}else if(usuario == 'paiva' && senha == '54321'){
    console.log('Seja bem vindo!')
}else{
    console.log('Usuário e senha não conferem')
}