let nomes = ["ana", "bia", "carlos"]
nomes.push("Pedro")
console.log(nomes)
nomes.shift()
console.log(nomes)

//segunda parte
let historico= ["google", "youtube"]
historico.unshift("git hub")
console.log(historico)

historico.pop()
console.log(historico)


//terceira parte

let original=[10,20,30,40]
let copia=original.slice(1,4)
console.log(original)
console.log(copia)


//quarta parte

let frutas=["Maça", "banana"]
frutas.pop()
console.log(frutas)
frutas.unshift("pera","uva")
console.log(frutas)


//quinta parte 
let ranking=["Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"]
let toptres=ranking.slice(0,3);
console.log(toptres)