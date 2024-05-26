/*Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.*/

function calcularProduto(numeros) {
  let valorInicial = 1;
  const soma = numeros.reduce(
    (acc, valorAtual) => acc * valorAtual,
    valorInicial
  );
  return soma;
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120
