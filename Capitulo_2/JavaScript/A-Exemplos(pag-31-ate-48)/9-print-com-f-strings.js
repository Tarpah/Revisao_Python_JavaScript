const dataHoje = new Date();
const ano_atual = dataHoje.getFullYear()
let clube = 'SPFC'
let campeonatoMundial  = 3
let ano_fundacao = 1930 

console.log(`${clube} possui ${campeonatoMundial} títulos mundiais."`)
console.log(`São ${ano_atual - ano_fundacao} anos de existência.`)

console.log(`${clube} foi fundado em 30 de janeiro de ${ano_fundacao}.
             Em seus ${ano_atual - ano_fundacao} anos de história,
             obteve ${campeonatoMundial} títulos mundiais.`)


console.log(`Matrícula do Charles Babbage é ${ (25).toString().padStart(6, 0) }`)
console.log(`Matrícula do Alan Turing é ${ (99999).toString().padStart(6, 0)}.`)
console.log(`Matrícula da Ada Lovelace é ${ (100387).toString().padStart(6, 0)}.`)
console.log(`Matrícula da Ada Lovelace é ${ (3.14159265352384626433).toFixed(20)}.`)