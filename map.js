// Dado um vetor de preços [10, 20, 30, 40, 50], use map() para criar um novo vetor com todos os preços aumentados em 5 reais.
// Dado um vetor de idades [15, 18, 22, 30, 45], use map() para criar um novo vetor informando se cada pessoa é "Maior de idade" (≥ 18) ou "Menor de idade".
// Dado um vetor de nomes ["ana", "joao", "maria", "pedro"], use map() para criar um novo vetor com todos os nomes em letras maiúsculas.
// Dado um vetor de números [2, 4, 6, 8, 10], use map() para criar um novo vetor com o dobro de cada número.
// Dado um vetor de produtos ["celular", "notebook", "tablet", "fone"], use map() para criar um novo vetor adicionando a palavra "Produto: " antes de cada nome. Exemplo: "Produto: celular"

//ex1
let precos=[10, 20, 30, 40, 50];
novoPreco=precos.map(function(elemento){
    return elemento+5
})
console.log(novoPreco)

let idades = [15, 18, 22, 30, 45];
let maior=idades.map(function(z){
    if(z>=18){
        return "Maior Idade"
    }else{
        return "Menor idade"
    }
})
console.log(maior)

 //ex2
let nomes =["ana", "joao", "maria", "pedro"];
let maiorum =nomes.map(function(x){
    return x.toUpperCase()
})
console.log(maiorum)

//ex3
let numeros=[2, 4, 6, 8, 10];
let dobro = numeros.map(function(numero){
    return numero*2
})
console.log(dobro)
//ex4

let produtos=["celular", "notebook", "tablet", "fone"];
let novoProduto=produtos.map(function(p){
    return "Produto: "+p
})
console.log(novoProduto)