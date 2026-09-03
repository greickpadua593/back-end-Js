1.

function saudarAluno(nome) {
  console.log("Olá, " + nome + "! Seja bem-vindo.");
  
}

 saudarAluno("Rafael");


2.
function calcularArea(base, altura) {
    let area = base * altura;
    console.log("A área calculada é: " + area);
   
  }
  calcularArea(5, 4);

  3.
 
  function exibirPrecoComDesconto(preco, desconto) {
    let final = preco - desconto;
    console.log("Preço final: R$" + final);
  }
  let valorDesconto = 10;
  let valorProduto = 50;
  exibirPrecoComDesconto(valorProduto, valorDesconto);
  
  4.
  function avisarPlantas() {
    console.log("Lembre-se de regar as plantas hoje!");
  }
  
  
  avisarPlantas();