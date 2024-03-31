const leia = require('readline-sync')

let codigo;
let quantidade;


console.log("\nLanchonete Generation: ")
console.log("\nCOD -- Produto: ")
console.log("1 -- Cachorro quente")
console.log("2 -- X-Salada")
console.log("3 -- X-Bacon")
console.log("4 -- Bauru")
console.log("5 -- Refrigerante")
console.log("6 -- Suco de laranja")

codigo = leia.questionInt("\nDigite o codigo do produto que deseja comprar: ")
quantidade = leia.questionInt("\nAgora, digite a quantidade que deseja: ")

switch (codigo) {
    case 1:
        valor = quantidade * 10
        console.log(`\nProduto: Cachorro quente \nValor total: R$ ${valor}`)
        break;
    case 2:
        valor = quantidade * 15
        console.log(`\nProduto: X-Salada \nValor total: R$ ${valor}`)
        break;
    case 3:
        valor = quantidade * 18
        console.log(`\nProduto: X-Bacon \nValor total: R$ ${valor}`)
        break;
    case 4:
        valor = quantidade * 12
        console.log(`\nProduto: Bauru \nValor total: R$ ${valor}`)
        break;
    case 5:
        valor = quantidade * 8
        console.log(`\nProduto: Refrigerante \nValor total: R$ ${valor}`)
        break;
    case 6:
        valor = quantidade * 13
        console.log(`\nProduto: Suco de laranja \nValor total: R$ ${valor}`)
        break;

}