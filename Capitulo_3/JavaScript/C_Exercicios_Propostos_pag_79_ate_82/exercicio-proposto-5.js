const prompt = require('prompt-sync')()

let salarioFinal

const salario = Number(prompt('Digite o salário atual do funcionário: '))
console.log(`
Cargo| COD 1 | Programador de Sistemas
Cargo| COD 2 | Analista de Sistemas
Cargo| COD 3 | Analista de Banco de Dados`)

if (salario > 0){
    const codigo = Number(prompt('Digite o código do cargo: '))
    switch(codigo){
        case 1:
            salarioFinal = salario * (1 + 30/100)
            break

        case 2:
            salarioFinal = salario * (1 + 20/100)
            break

        case 3:
            salarioFinal = salario * (1 + 15/100)
            break

        default:
            console.log('Código inválido')
            break
    }
}else{
    console.log('Salário deve ser positivo!')
}

salarioFinal != undefined? console.log(`Salário Final:${salarioFinal}`) : console.log(``)