const prompt = require('prompt-sync')()

const estatura1 = Number(prompt('Estatura 1:') )
const estatura2 = Number(prompt('Estatura 2:') )
const estatura3 = Number(prompt('Estatura 3:') )

if(estatura1 == estatura2 || estatura1 == estatura3 || estatura2 == estatura3){
    console.log('Há, pelo menos, 2 pessoas com a mesma estatura.')
}else{
    if(estatura1 > estatura2 && estatura1 > estatura3){
        console.log(`Maior estatura:${estatura1}`)
    }else if(estatura2 > estatura3){
        console.log(`Maior estatura:${estatura2}`)
    }else{
        console.log(`Maior estatura:${estatura3}`)
    }
}