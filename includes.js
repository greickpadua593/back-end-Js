//ex1
let frutas=["maçã", "banana", "uva", "laranja"];
console.log(frutas.includes("uva"));

//ex2
let numeros=[10, 20, 30, 40, 50];
console.log(numeros.includes(25));

//ex3
let times=["Coritiba", "Athletico", "Flamengo", "Palmeiras"];
let time = "coxa"
console.log(times.includes(time));

//ex4
let cores=["azul", "verde", "amarelo", "vermelho"];
console.log(cores.includes("preto"));

//ex5
let nomes=["Ana", "Carlos", "Marina", "João"]
let existe=nomes.includes("Marina")
if(existe){
       console.log("nome encontrado")
}else{
console.log("nome não encontrado")
}
