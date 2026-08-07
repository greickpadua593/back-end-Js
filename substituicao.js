// Exercício 1: A Primeira Troca 
// Entrada: Eu gosto de tomar café pela manhã e café à tarde
// Tarefa: Troque apenas a primeira ocorrência da palavra café.
// Saída esperada: Eu gosto de tomar chá pela manhã e café à tarde

// Exercício 2: Censura Simples
// Entrada: O rato roeu a roupa do rei, e o rato fugiu
// Tarefa: troque  rato por ***para  todas as ocorrências de forma direta.
// Saída esperada: O *** roeu a roupa do rei, e o *** fugiu 

// Exercício 3: Ignorando Maiúsculas na Primeira Troca
// Entrada: A linguagem JavaScript é incrível. javascript é muito popular
// Tarefa: Converta o texto para minúsculas e depois substitua a primeira ocorrência de "javascript" por "JS" mantendo o resto do texto original. Por fim, mantenha a letra A do inicio da frase em maiuscula.
// Saída esperada: A linguagem JS é incrível. javascript é muito popular

// Exercício 4: Troca Global de Variações
// Entrada: O Bug do sistema gerou outro bug e um BUG crítico
// Tarefa: substitua BUG por erro
// Saída esperada: O erro do sistema gerou outro erro e um erro crítico

// Exercício 5: Formatando Datas
// Entrada: 2026-08-04
// Tarefa: Troque todos os traços por barras de forma simples.
// Saída esperada: 2026/08/04

// Exercício 6: Limpando Caracteres Repetidos
// Entrada: Olá..... mundo!!!
// Tarefa: Troque ..... por . e !!! por !.
// Saída esperada: Olá. mundo!

//ex1
let primeiraOcorrência="Eu gosto de tomar café pela manhã e café à tarde"
console.log(primeiraOcorrência.replace("café","chá"))

//ex2
let censura="O rato roeu a roupa do rei, e o rato fugiu"
console.log(censura.replaceAll("rato","***"))

//ex3
let entrada="A linguagem JavaScript é incrível. javascript é muito popular"
let novaEntrada=entrada.toLowerCase()
console.log(novaEntrada)
let novaEntrada2=novaEntrada.replace("javascript","JS")
console.log(novaEntrada2)
console.log(novaEntrada2.replace("a","A"))

//ex4
let trocaGlobal="O Bug do sistema gerou outro bug e um BUG crítico"
console.log(trocaGlobal.replaceAll("BUG","erro"))

//ex5
let formato="2026-08-04"
let novoFormato=formato.replaceAll("-","/")
console.log(novoFormato)

//ex6
let caracter="Olá..... mundo!!!"
let novoCaracter=caracter.replace(".....",".")
let novoCaracter2=novoCaracter.replace("!!!","!")
console.log(novoCaracter2)

