let numeros = [1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
let nomes =["Ana", "Bia", "Sia"]
console.log(nomes[0])
let varios = [1, "a","Br",true]
console.log(varios[0])



numeros.push(33)
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.unshift("Ana")
console.log(numeros)


let frutas =["banana", "maça", "Uva"]
frutas.push("Morango")
console.log(frutas)

frutas.unshift("cenoura")
console.log(frutas)

frutas.shift()
console.log(frutas)

for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

frutas.splice(1,0,"Pera")
console.log(frutas)

frutas.splice(4,1)
console.log(frutas)