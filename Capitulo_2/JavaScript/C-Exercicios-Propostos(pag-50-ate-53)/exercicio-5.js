const prompt = require('prompt-sync')()

let x1 = Number(prompt(`Digite o ponto X1:`))
let y1 = Number(prompt(`Digite o ponto Y1:`))
let x2 = Number(prompt(`Digite o ponto X2:`))
let y2 = Number(prompt(`Digite o ponto Y2:`))

let d = Math.sqrt((x2-x1)**2+(y2-y1)**2)

console.log(`A ditancia entre os pontos P1 e P2:${d}`)