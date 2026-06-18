//ex1
let numerosum =[5, 8, 12, 3, 7];
let soma=numerosum.reduce(function(acumulador,elemento){
  return acumulador + elemento
},0)
console.log(soma)

//ex2
let numeros = [2, 3, 4, 5];
let mult=numeros.reduce(function(acumulador, elemento){
  return acumulador *elemento
},1)
console.log(mult)

