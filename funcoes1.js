// 1: O Carimbo de Boas-Vindas 
// Crie uma função chamada saudarUsuario que receba um nome como parâmetro e retorne a frase: "Olá,
// [Nome]! Seja bem-vindo ao sistema.". 
// Em seguida, invoque essa função 3 vezes no console com nomes
// diferentes. 
// Exercício 2: A Máquina de Somar 
// Escreva uma função chamada somarValores que receba dois números como parâmetros (valores de
// entrada). 
// O papel da máquina é somar esses números e retornar o resultado total. 
// Teste chamando a
// função com os números 15 e 25. 
// Exercício 3: Corrigindo o Bug da Fábrica 
// O código abaixo foi escrito de forma repetitiva e cansativa. 
// Reescreva-o criando uma única função
// chamada calcularPrecoComDesconto para eliminar a repetição de código: 
// let item1 = 50 - 10;
// console.log("Preço final: " + item1);
// let item2 = 80 - 10;
// console.log("Preço final: " + item2);
// let item3 = 120 - 10;
// console.log("Preço final: " + item3)

// ex1
function saudarUsuario(nome){
    return `ola,${nome},seja bem vindo ao sistema`
   
}
console.log(saudarUsuario("Greick"))
console.log(saudarUsuario("Padua"))
console.log(saudarUsuario("Augusto"))

// ex2
function somarValores(numero1,numero2){
    let soma =numero1+numero2
    return soma
}
console.log(somarValores(15,25));

//ex3
function calcularPrecoComDesconto(preco){
    let precoFinal= preco -10;
    console.log( "Preco final: " + precoFinal);
}

calcularPrecoComDesconto(50)
