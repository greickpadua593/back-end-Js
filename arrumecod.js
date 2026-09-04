// Exercício 1: O Verificador de Idade (Básico)
// Objetivo: if / else e Lógica Computacional.
// O que o código deveria fazer: Permitir a entrada apenas de maiores ou iguais a 18 anos.

// javascript
let idade = 18;

if (idade >= 18) {
console.log("Acesso liberado.");
} else {
console.log("Acesso negado.");
}

// Use o código com cuidado.
// Qual é o erro?
// Exercício 2: O Contador Infinito (Básico)
// Objetivo: Laço while e incremento.
// O que o código deveria fazer: Imprimir os números de 1 até 5.

// javascript
let contador = 1;
while (contador <= 5) {
 contador=contador+1
console.log(contador);
}

// Use o código com cuidado.
// Qual é o erro?
// Exercício 3: Somando Elementos (Básico)
// Objetivo: Laço for e manipulação de arrays (vetores).
// O que o código deveria fazer: Somar todos os números do vetor.

// javascript
const numeros1 =[1,2,3,4,5];
let soma = 0;

for (let i = 0; i < numeros1.length; i++) {
soma +=  numeros1[i];
}

// console.log("A soma é:", soma);

// Use o código com cuidado.
// Qual é o erro?
// Exercício 4: Formatador de Nomes (Básico)
// Objetivo: Métodos de string e imutabilidade.
// O que o código deveria fazer: Lilet nomeUsuario = " ana silva ";
// limpar os espaços em branco nas pontas e deixar o nome em maiúsculo.

// // javascript
let nomeUsuario = " ana silva ";

// // // Tentativa de limpar e transformar
let espaco=nomeUsuario.trim();
let novo=espaco.toUpperCase();

console.log(novo); // Deveria exibir "ANA SILVA"

// Use o código com cuidado.
// Qual é o erro?
// Exercício 5: Busca de Elemento (Intermediário)
// Objetivo: Busca em array com for e if/else.
// O que o código deveria fazer: Percorrer a lista inteira e dizer se o número 7 está ou não nela.

// javascript
const lista =[1,2,3,4,5,6,7];

for (let i = 0; i < lista.length; i++) {
if (lista[i] === 7) {
let msg =("Encontrado!")
} else {
msg =("Não encontrado!");
}
}
console.log(msg)

// Use o código com cuidado.
// Qual é o erro de lógica na saída do console?
// Exercício 6: O Filtro de Palavras Curtas (Intermediário)
// Objetivo: Métodos de array e strings.
// O que o código deveria fazer: Adicionar ao array curtas apenas palavras com menos de 5 letras.

// javascript
const palavras = ["sol", "computador", "lua", "programação"];
let curtas = [];
for (let i = 0; i < palavras.length; i++) {
if (palavras[i].length < 5) {
curtas.push (palavras[i])
}
}
console.log(curtas)


// console.log(curtas); // Deveria exibir ['sol', 'lua']

// Use o código com cuidado.
// Qual é o erro?
// Exercício 7: I=
// javascript
let texto = "JavaScript";
let textoInvertido = "";
let indice = texto.length;

while (indice > 0) {
    indice--;
textoInvertido += texto[indice];
}

console.log(textoInvertido);

// Use o código com cuidado.
// Quais são os dois erros que acontecem aqui ao tentar acessar os caracteres?
// Exercício 8: O Ajustador de Preços (Intermediário)
// Objetivo: Modificação de elementos dentro de escopos/laços.
// O que o código deveria fazer: Dobrar o valor de cada preço dentro do vetor original.

// javascript
let  precos = [10.0, 20.0, 30.0];
let novopreco=precos.map(function(p)
 {
 return p = p * 2;
})
console.log(novopreco); // Deveria exibir [20, 40, 60]

// Use o código com cuidado.
// Qual é o erro?
// Exercício 9: Validador de Senha (Intermediário)
// Objetivo: Operadores lógicos, strings e condicionais.
// O que o código deveria fazer: Validar se a senha tem pelo menos 8 caracteres E contém a palavra "seguro".

// javascript
let senha = "123seguro";

if (senha.length >= 8 && senha.includes("seguro")) {
console.log("Senha válida");
} else {
console.log("Senha inválida");
}

// Use o código com cuidado.
// Se testarmos a senha "123seguro", o programa aceita. Mas e se testarmos apenas "123"? Por que o operador usado está incorreto?
// Exercício 10: O Removedor de Pares (Intermediário Avançado)
// Objetivo: Mutação de arrays durante a iteração de índices.
// O que o código deveria fazer: Remover todos os números pares do vetor.

// javascript
let numeros =[1,2,3,4,5];

for (let i = 0; i < numeros.length; i++) {
if (numeros[i] % 2 === 0) {
numeros.splice(i, 1);
i --
      // Remove 1 elemento no índice i
}
}

console.log(numeros); // Deveria exibir [5, 7]

// Use o código com cuidado.
// Qual é o erro de lógica clássico que acontece com os índices quando alteramos o tamanho do array dentro do for?