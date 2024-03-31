const leia = require('readline-sync')

let num;

num = leia.questionInt("Digite um numero: ")

if(num % 2 === 0 && num > 0){
    console.log(`O número ${num} é par e positivo!`)
}else if(num % 2 === 0 && num < 0){
    console.log(`O número ${num} é par e negativo!`)
}else if(num % 2 != 0 && num > 0){
    console.log(`O número ${num} é impar e positivo!`)
}else if(num % 2 != 0 && num < 0){
    console.log(`O número ${num} é impar e negativo!`)
}