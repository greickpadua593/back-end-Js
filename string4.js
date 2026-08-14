// . Separar Frase em Palavras
// O que fazer: Crie uma variável com a frase "Aprender JavaScript é muito divertido".
// Como fazer: Use o método .split() com um espaço em branco (" ") para separar a frase em uma lista de palavras.
// Resultado esperado: ['Aprender', 'JavaScript', 'é', 'muito', 'divertido']
// 2. Criar Links (Slug) a partir de Títulos
// O que fazer: Crie uma variável com o título de um post: "Como criar um site".
// Como fazer: Transforme tudo em minúsculas com .toLowerCase() e depois troque os espaços por hifens "-" usando .split() seguido de .join().
// Resultado esperado: "como-criar-um-site"
// 3. Padronizar E-mails
// O que fazer: Crie uma variável com um e-mail escrito de forma errada: " CONTATO@MEUSITE.COM ".
// Como fazer: Remova os espaços extras com .trim() e mude todas as letras para minúsculas com .toLowerCase().
// Resultado esperado: "contato@meusite.com"
// 4. Extrair Iniciais de um Nome
// O que fazer: Crie uma variável com o nome completo "ana maria silva".
// Como fazer: Use .split(" ") para pegar cada parte do nome, acesse a primeira letra de cada item e use .toUpperCase() para deixá-las maiúsculas.
// Resultado esperado: "AMS"
// 5. Formatar Lista de Compras
// O que fazer: Crie uma lista em formato de texto separado por vírgulas: "maçã,banana,laranja,uva".
// Como fazer: Use .split(",") para transformar em um vetor e depois use .join(" | ") para juntar os itens com barras verticais.
// Resultado esperado: "maçã | banana | laranja | uva"
// 6. Encontrar Palavras Proibidas
// O que fazer: Crie uma frase com letras misturadas: "Isso é MUITO Perigoso".
// Como fazer: Converta a frase inteira para letras minúsculas com .toLowerCase() para facilitar a busca e verifique se ela contém a palavra "perigoso".
// Resultado esperado: true
// 7. Ocultar Parte de um Documento (CPF)
// O que fazer: Crie uma string com um CPF: "123.456.789-00".
// Como fazer: Use .split(".") para separar os blocos por ponto e junte-os novamente usando .join("-") para mudar o formato do separador.
// Resultado esperado: "123-456-789-00"


//ex1
let frase="Aprender JavaScript é muito divertido";
let novaFrase=frase.split(" ")
console.log(novaFrase)

//ex2
let post="Como criar um site"
console.log(post.toLocaleLowerCase().split(" ").join("-"))

//ex3
let email=" CONTATO@MEUSITE.COM "
let novoEmail=email.trim()
console.log(novoEmail)
let novoEmail2=novoEmail.toLocaleLowerCase()
console.log(novoEmail2)

//ex4
let nome="ana maria silva"
let novo=nome.split(" ")
console.log(novo)
let letra1=novo[0][0].toUpperCase()
let letra2=novo[1][0].toUpperCase()
let letra3=novo[2][0].toUpperCase()
let fim=letra1+letra2+letra3
console.log(fim)

//ex5
let lista="maçã,banana,laranja,uva"
console.log(lista.split(",").join(" | "))

//ex6
let misturadas="Isso é MUITO Perigoso"
let nova=misturadas.toLowerCase()
let existe=nova.includes("perigoso")
console.log(existe)

//ex7
let cpf="123.456.789-00"
console.log(cpf.split(".").join("-"))