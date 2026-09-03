// let nome1 = "João";
// let nota1 = 8;
// let nota2 = 7;

// let media1 = (nota1 + nota2) / 2;

// if (media1 >= 6) {
//     console.log(nome1 + " foi aprovado!");
// } else {
//     console.log(nome1 + " foi reprovado!");
// }


// let nome2 = "Maria";
// let nota3 = 5;
// let nota4 = 4;

// let media2 = (nota3 + nota4) / 2;

// if (media2 >= 6) {
//     console.log(nome2 + " foi aprovado!");
// } else {
//     console.log(nome2 + " foi reprovado!");
// }


// let nome3 = "Pedro";
// let nota5 = 9;
// let nota6 = 8;

// let media3 = (nota5 + nota6) / 2;

// if (media3 >= 6) {
//     console.log(nome3 + " foi aprovado!");
// } else {
//     console.log(nome3 + " foi reprovado!");
// }
calcularMedia1 ('Joao',6,8)
calcularMedia1 ('Maria',5,4)
calcularMedia1 ('Pedro',9,8)

function calcularMedia1 (nome,nota1,nota2){
      let soma = nota1 + nota2
      let media = soma /2
      if (media >= 6) {
        console.log(nome + " foi aprovado!");
    } else {
        console.log(nome + " foi reprovado!");
    }
      return media
}