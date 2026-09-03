// 1.Crie uma função chamada dobrarNumero que receba um número como parâmetro.
// A função deve desse número.
// Depois, teste a função no console utilizando os valores:
// 5
// 12
// 25
// O dobro de 5 é: 10
// O dobro de 12 é: 24
// O dobro de 25 é: 50
function dobrarNumero(numero){
    return numero*2;
}
console.log(" dobro de 5 é:" + dobrarNumero(5))
console.log(" dobro de 12 é:" + dobrarNumero(12))
console.log(" dobro de 25 é:" + dobrarNumero(25))

// 2.Calculadora de Média 🎓
// Crie uma função chamada calcularMedia que receba como parâmetros.

// A função deve:
// Somar as três notas;
// Dividir o resultado por 3;
// Retornar a média.

// Depois, utilize a função para calcular a média de três alunos diferentes.
// calcularMedia(7, 8, 9)
// Resultado
// Média: 8
function calcularMedia(nota1, nota2, nota3) {
    let soma = nota1 + nota2 + nota3;
    let media = soma / 3;


    return media;
}


console.log("Média: " + calcularMedia(7, 8, 9));
console.log("Média: " + calcularMedia(6, 7, 8));
console.log("Média: " + calcularMedia(9, 8, 10));


// 3.Detector de Número 🔎
// Crie uma função chamada verificarNumero que receba um número como parâmetro.

// A função deve verificar se o número é .

// A função deverá retornar:
// true → se o número for maior que 10;
// false → se o número for menor ou igual a 10.
// Teste com:
// verificarNumero(5)
// verificarNumero(10)
// verificarNumero(15)
// verificarNumero(30)


// false
// false
// true
// true

function verificarNumero(numero) {
    return numero > 10;
}


console.log(verificarNumero(5));
console.log(verificarNumero(10));
console.log(verificarNumero(15));
console.log(verificarNumero(30));


// 4.Sistema de Boas-Vindas 👋
// Crie uma função chamada mensagemBoasVindas que receba :
// nome
// cidade
// A função deve retornar uma mensagem utilizando essas duas informações.

// Por exemplo:
// mensagemBoasVindas("Lucas", "Curitiba")
// deve retornar:

// Olá, Lucas! Você está em Curitiba.
// Faça pelo menos da função com nomes e cidades diferentes.
function mensagemBoasVindas(nome, cidade) {
    return "Olá, " + nome + "! Você está em " + cidade + ".";
}


console.log(mensagemBoasVindas("Lucas", "Curitiba"));
console.log(mensagemBoasVindas("Ana", "São Paulo"));
console.log(mensagemBoasVindas("Pedro", "Rio de Janeiro"));
