//exercício 1
let alunos =["ana", "pedro", "maria"];
for(let i=0; i<alunos.length;i++){
    console.log("Presente: "+ alunos[i])
}

alunos.forEach(function(aluno){
    console.log("Presente: "+ aluno)
})

//exercício 2

let base = [5, 10, 15];
for(let i= 0; i < base.length; i ++){
   console.log( base[i]*2)
}

base.forEach(function(numero){
    console.log(numero *2)
})

//exercicio 3

let marcas = ["Fiat", "Ford", "VW"];
for (let i=0 ; i<marcas.length; i ++){
    console.log("Índice"+i +":"+marcas[i])
}

marcas.forEach(function(marca,i){
    console.log("Indice "+ i + ": "+ marca)
})

//exercicio 4

let pontos = [10, 20, 30];
let total = 0;

for(let i=0; i<pontos.length; i ++){
    total = total + pontos[i]
}

pontos.forEach(function(ponto){
    total = total + ponto
})
console.log(total)


//exercicio 5
let estoque = [5, 12, 3, 20, 8];
for(let i=0; i<estoque.length; i++){
    if(estoque[i]<10){
        console.log("Repor produto:"+estoque[i])
    }
}
estoque.forEach(function(numero){
    if(numero < 10){
           console.log("Repor produto: "+numero)
    }
})
