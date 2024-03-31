const leia = require('readline-sync')

let a, b, c;

a = leia.questionInt("Digite um valor inteiro A: ")
b = leia.questionInt("Digite outro valor inteiro B: ")
c = leia.questionInt("Digite o ultimo valor inteiro C: ")

soma = a + b

if(soma > c){
    console.log(`A soma dos valores A + B é igual a: ${soma}, que é maior que o valor C: ${c}`)
}else if(soma < c){
    console.log(`A soma dos valores A + B é igual a: ${soma}, que é menor que o valor C: ${c}`)
}else if(soma = c){
    console.log(`A soma dos valores A + B é igual a: ${soma}, que é igual ao valor C: ${c}`)
}

