prompt = require('prompt-sync')();

sobrenome = prompt('Digite o sobrenome do apresentador: ').toUpperCase()

if(sobrenome == 'PINHEIRO' || sobrenome == 'ARAUJO'){
    console.log('Jornal: Bom Dia Nação')
}else if(sobrenome == 'BONNER' || sobrenome == 'VASCONCELOS'){
    console.log('Jornal: Jornal Brasileiro')
}else{
    console.log('apresenta-dor(a) desconhecido(a).')
}