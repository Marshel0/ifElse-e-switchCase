const leia = require('readline-sync')

let nome;
let codigo;
let salario;

nome = leia.question("\nDigite seu nome: ")

console.log("\nCOD -- Cargo: ")
console.log("1 -- Gerente")
console.log("2 -- Vendedor")
console.log("3 -- Supervisor")
console.log("4 -- Motorista")
console.log("5 -- Estoquista")
console.log("6 -- Tecnico de TI")

codigo = leia.questionInt("\nDigite o codigo que corresponde ao seu cargo: ")

salario = leia.questionInt("Agora, digite o seu salario: R$ ")

switch (codigo) {
    case 1:
        novoSalario = salario + (10 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;
    case 2:
        novoSalario = salario + (7 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;
    case 3:
        novoSalario = salario + (9 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;
    case 4:
        novoSalario = salario + (6 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;
    case 5:
        novoSalario = salario + (5 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;
    case 6:
        novoSalario = salario + (8 * salario / 100)
        console.log(`\nNome: ${nome} \nSalario: R$ ${salario} \nSalario reajustado: R$ ${novoSalario}`)
        break;

}