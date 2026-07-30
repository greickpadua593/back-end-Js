// 1. Contador de Comprimento
// Crie uma variável chamada curso com o valor " JavaScript ".
// Imprima no console o tamanho total da string original (com espaços).
// Em seguida, remova os espaços das pontas e imprima o tamanho da string resultante.
// 2. Primeiro e Último Caractere
// Dada a string let palavra = "Desenvolvimento";:
// Use o método  para pegar a primeira letra.
// Use colchetes [] junto com a propriedade .length para pegar a última letra de forma dinâmica.
// 3. Limpeza de Formulário
// Imagine que um usuário preencheu um campo de texto de login digitando " usuario_admin ".
// Crie uma função ou código que remova apenas os espaços do início e guarde em uma variável.
// Remova apenas os do final e guarde em outra.
// Por fim, aplique a limpeza completa (início e fim) e mostre o resultado limpo.
// 4. Caça ao Código UTF-16
// Dada a string let sigla = "JS";:
// Descubra e imprima o código UTF-16 da letra 'J' (índice 0).
// Descubra e imprima o código UTF-16 da letra 'S' (índice 1).
// 5. O Desafio do Emoji
// A string a seguir contém um emoji: let frase = "Javascript é 🚀!";
// Verifique o comprimento (.length) dessa string.
// Descubra o código do emoji '🚀'. (Dica: descubra em qual índice o emoji está localizado!)
// 6. Validador de Espaços em Branco
// Escreva um pequeno código que receba a string let entrada = " "; (composta apenas por espaços):
// Verifique se, após aplicar o .trim(), a string fica totalmente vazia "".
// Imprima true se estiver vazia ou false caso contrário.
// 7. Verificando Limites dinamicamente
// Dada uma frase qualquer (ex: let frase = "Aprender a programar é incrível";):
// Tente acessar o caractere no índice 100  e imprima no console.
// Tente acessar o mesmo índice 100 usando colchetes frase[100] e imprima no console.
// Questão: O que foi impresso em cada um dos casos?
// 8. Formatador de Nomes
// Um sistema recebeu o nome completo de um cliente como " Ana Maria Silva ".
// Remova todos os espaços extras do início e do fim.
// Exiba no console uma mensagem assim: "O nome limpo tem X caracteres", onde X é o tamanho do nome já sem os espaços das pontas.
// 9. Descobrindo o Caractere pelo Código
// Sabendo que o código UTF-16 da letra 'A' maiúscula é 65:
// Crie uma string let texto = "A";
// Descubra o correspondente em UFT-16 e veja  se o retorno realmente é 65.
// Teste com a letra 'a' minúscula e veja se o código é igual ou diferente.
// 10. Mini Inspetor de Strings (Desafio Integrado)
// Crie uma string let frase = " Código Seguro 🔒 "; 
// e faça o seguinte:Imprima o tamanho da string original.
// Crie uma nova variável com a frase limpa (sem espaços nas pontas).
// Imprima o primeiro caractere da frase limpa.
// Imprima o código do emoji 🔒 usando .codePointAt().



 //ex1
let curso= " JavaScript";
console.log(curso.length);
let semEspaco=curso.trim()
console.log(semEspaco.length)

//ex2
let palavra="Desenvolvimento";
console.log(palavra.charAt(0));
let ultimaLetra=palavra[palavra.length -1]
console.log(ultimaLetra)

//ex3
let login=" usuario_admin "
let semEspacoInicio=login.trimStart();
console.log(semEspacoInicio)
console.log(login)
let semEspacoFim=login.trimEnd()
console.log(semEspacoFim)

//ex4
let sigla = "JS";
console.log(sigla.charCodeAt(0))
console.log(sigla.charCodeAt(1))

// ex5
let frase = "Javascript é 🚀!";
console.log(frase.length);
let posicao=frase.indexOf("🚀")
console.log(posicao)
console.log(frase.codePointAt(13))

// ex6
let entrada = " ";
let semEspaco1=entrada.trim()===""
console.log(semEspaco1)