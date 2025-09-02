const prompt = require('prompt-sync')();

// Na questão fica inplicito que as respostas serão sempre 0(falso) ou 1(verdadeiro)
const nomeNegativado = Number(prompt('Possui nome negativado?'))

if (nomeNegativado){
    console.log('Não pode realizar empréstimo')
}else{
    carteiraAssinada = Number(prompt('Possui carteira assinada?'))

    if(!carteiraAssinada){
        console.log('Não pode realizar empréstimo')
    }else{
        possuiCasaPropria = Number(prompt('Possui casa própria?'))
        if(!possuiCasaPropria){
            console.log('Não pode realizar empréstimo')
        }else{
            console.log('Pode realizar empréstimo')
        }
    }
}

