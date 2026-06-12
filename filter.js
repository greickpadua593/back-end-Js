// // Dado o vetor abaixo, crie um novo vetor contendo apenas os valores  maiores que 12:
// var numeros = [5, 12, 8, 20, 3, 15];



// Dado o vetor abaixo, crie um novo vetor contendo apenas os nomes que possuem mais de 4 letras:
// var nomes = ['Ana', 'Carlos', 'Beatriz', 'João', 'Fernanda'];



// Dado o vetor abaixo, crie um novo vetor contendo apenas os os numeros pares:
// var valores = [1, 2, 3, 4, 5, 6, 7, 8];



// Dado o vetor abaixo de objetos, crie um novo vetor contendo apenas os produtos com preço menor que 100:
// var produtos = [
// { nome: 'Mouse', preco: 50 },
// { nome: 'Teclado', preco: 120 },
// { nome: 'Monitor', preco: 900 },
// { nome: 'Cabo USB', preco: 25 }
// ];



// Dado o vetor abaixo representando um histórico de IMC, crie um novo vetor contendo apenas os registros com  imc maior que 25:
// var historico = [
// { imc: 17.5 },
// { imc: 22.3 },
// { imc: 28.7 },
// { imc: 31.2 },
// { imc: 24.0 }
// ];


//ex1
let numeros = [5, 12, 8, 20, 3, 15];
let maiores=numeros.filter(function(x){
 return   x>12
})
console.log(maiores)

//ex2
let nomes = ['Ana', 'Carlos', 'Beatriz', 'João', 'Fernanda'];
let maioresdois=nomes.filter(function(nome){
    return nome.length >4
})
console.log(maioresdois)

//ex3
let valores = [1, 2, 3, 4, 5, 6, 7, 8];
let par=valores.filter(function(p){
    return p % 2==0
})
console.log(par)

//ex4


let produtos = [
    { nome: 'Mouse', preco: 50 },
    { nome: 'Teclado', preco: 120 },
    { nome: 'Monitor', preco: 900 },
    { nome: 'Cabo USB', preco: 25 }
    ];
let menor=produtos.filter(function(y){
    return y.preco <100
})
console.log(menor)


//ex5

let historico = [
    { imc: 17.5 },
    { imc: 22.3 },
    { imc: 28.7 },
    { imc: 31.2 },
    { imc: 24.0 }
    ];
let imcnovo=historico.filter(function(im){
    return im.imc >25
})
console.log(imcnovo)