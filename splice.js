//exercício 1
// Exercício 1: O Organizador de Filas 
// Você tem uma fila de espera: let fila = ["Ana", "Beto", "Carlos", "Diana"]; 
// O "Beto" desistiu e, no lugar dele, entraram dois novos clientes: "Edu" e "Fábio".Exercício 2: O Top 3 do Ranking 
// Você recebeu uma lista de pontuações de uma maratona:
// let pontos = [150, 132, 110, 95, 80, 75, 60];
// Crie um novo vetor chamado podio que contenha apenas os 3 primeiros colocados, sem alterar a lista original.Exercício 3: Limpeza de Sistema 
// Um sensor registrou os seguintes valores: let dados = [10, 20, "ERRO", "ERRO", 50, 60]; 
// Remova os dois valores "ERRO" permanentemente do vetor original.Exercício 4: O "Pegar os Últimos"
// Dada a lista: let convidados = ["Leo", "Bia", "Caio", "Lara", "Noah"];
// Pegue apenas os dois últimos nomes da lista usando slice com índice negativo. Guarde isso em uma nova variável.Exercício 5: Substituição Rápida
// Temos o array: let cores = ["Vermelho", "Verde", "Azul"]; 
// Troque o "Verde" por "Amarelo" usando o splice.

// //exercício 1
let fila = ["Ana", "Beto", "Carlos", "Diana"];
fila.splice(1,1,"Edu","Fabio");
console.log(fila);


//exercicio 2
let pontos = [150, 132, 110, 95, 80, 75, 60];
let podio =pontos.slice(0,3)
console.log(pontos)
console.log(podio)

//exercicio 3
let dados = [10, 20, "ERRO", "ERRO", 50, 60];
dados.splice(2,2)
console.log(dados)

//exercicio 4
let convidados = ["Leo", "Bia", "Caio", "Lara", "Noah"];
let ultimos=convidados.slice(-2)
console.log(ultimos)

//exercicio 5
let cores = ["Vermelho", "Verde", "Azul"]; 
cores.splice(1,1,"Amarelo")
console.log(cores);