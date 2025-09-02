const prompt = require('prompt-sync')()

let preco = prompt('Digite o preço total da venda: ')

console.log(`
COD: 1 | À vista (em espécie)           |   15% |
COD: 2 | Cartão de débito               |   10% |
COD: 3 | Cartão de crédito (vencimento) |   5%  |`)

const codigo = Number(prompt('Digite o código da forma de pagamento: '))

switch(codigo){
    case 1:
        console.log(`Preço final:${preco * (1 - 15/100)}`)
        return
    case 2:
        console.log(`Preço final:${preco * (1 - 10/100)}`)
        return
    case 3:
        console.log(`Preço final:${preco * (1 - 5/100)}`)
        return
    default:
        console.log('Código inválido.')
        return
}
