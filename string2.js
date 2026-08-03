// Exercício 1: Crie uma variável frase com o texto "Programar é muito  67!". Use o método  para descobrir a posição da palavra "muito" e exiba o resultado no console.
// Exercício 2: Dada a string texto = "banana", utilize o método para encontrar a posição da última ocorrência da letra "a".
// Exercício 3: Escreva um código que verifica se a string email = "aluno@escola.com" contém o caractere \@ usando o método correto. O resultado deve ser true ou false.
// Exercício 4: Crie uma variável arquivo com o valor "relatorio.pdf". Use o método endsWith para verificar se o arquivo termina com ".pdf".
// Exercício 5: Dada a frase mensagem = "Bom dia, aluno!", use o método startsWith para checar se ela começa com o texto "Bom".
// Exercício 6: Defina a string palavra = "Computador". Utilize o método slice para recortar e exibir apenas a palavra "Put" .
// Exercício 7: Usando a mesma string do exercício anterior (palavra = "Computador"), aplique o método substring do índice 0 até o 4 para ver qual parte da palavra é retornada.

//ex1
let frase="Programar é muito  67!"
let posicao=frase.indexOf("muito")
console.log(posicao)

//ex2
let  texto = "banana"
let ultimaletra=texto.lastIndexOf("a")
console.log(ultimaletra)

//ex3
let email = "aluno@escola.com"
console.log(email.includes("@"))

//ex4
let arquivo= "relatorio.pdf"
console.log(arquivo.endsWith(".pdf"))

//ex5
let mensagem="Bom dia, aluno!"
console.log(mensagem.startsWith("Bom"))

//ex6
let palavra= "Computador"
let corta=palavra.slice(3,6)
console.log(corta)

//ex7
let palavra1="computador"
console.log(palavra.substring(0,4))