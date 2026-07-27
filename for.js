 let numeros = [1,2,3]




 for(let i = 0; i< numeros.length; i++){
  if(numeros[i] >2){
    console.log(numeros[i])
    }
 }


//  numeros.forEach(function(numeros){
//     console.log(numeros)
//  })


//exercício 1
let alunos =["ana", "pedro", "maria"];
for(let i=0; i<alunos.length;i++){
    console.log("Presente: "+ alunos[i])
}

alunos.forEach(function(aluno){
    console.log("Presente: "+ aluno)
})

//exercicio 2
let base = [5, 10, 15];

// for()

let ranking = ["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"]
let top3 = ranking.slice(0,3)
console.log(top3)

// Extraindo Sub-lista
// Objetivo: Obter uma parte do array sem modificar o original.
// Crie um array ranking com: "Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto".
// Use slice para criar um novo array chamado top3 contendo apenas os três primeiros elementos.
// Resultado esperado: ["Primeiro", "Segundo", "Terceiro"]


// //exercicio 2
 let base = [5, 10, 15];
