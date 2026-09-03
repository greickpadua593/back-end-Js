// // Cliente 1
// let cliente1 = "Carlos";
// let valorTotal1 = 120;
// let desconto1 = 15;
// let valorFinal1 = valorTotal1 - desconto1;
// if (valorFinal1 > 100) {
//   console.log(cliente1 + " ganhou frete grátis! Total: R$" + valorFinal1);
// } else {
//   console.log(cliente1 + " terá que pagar o frete. Total: R$" + valorFinal1);
// }

// // Cliente 2
// let cliente2 = "Ana";
// let valorTotal2 = 80;
// let desconto2 = 5;
// let valorFinal2 = valorTotal2 - desconto2;
// if (valorFinal2 > 100) {
//   console.log(cliente2 + " ganhou frete grátis! Total: R$" + valorFinal2);
// } else {
//   console.log(cliente2 + " terá que pagar o frete. Total: R$" + valorFinal2);
// }

// // Cliente 3
// let cliente3 = "Bruno";
// let valorTotal3 = 200;
// let desconto3 = 30;
// let valorFinal3 = valorTotal3 - desconto3;
// if (valorFinal3 > 100) {
//   console.log(cliente3 + " ganhou frete grátis! Total: R$" + valorFinal3);
// } else {
//   console.log(cliente3 + " terá que pagar o frete. Total: R$" + valorFinal3);
// }

function verificarFrete(cliente,valorTotal,valorDesconto){
    let valorFinal=valorTotal-valorDesconto
    if(valorFinal>100){
        console.log(cliente+" ganhou frete grátis! Total: R$"+valorFinal);
    }else{
        console.log(cliente+" terá que pagar o frete. Total: R$"+valorFinal);
    } 
}
verificarFrete("Gertrudes",150,20)