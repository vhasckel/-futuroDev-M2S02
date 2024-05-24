/*
Ex 1 - Manipulação Básica de Arrays

Descrição: Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.
*/

function filtrarPares(numeros) {
  let pares = [];

  for (i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }

  return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = filtrarPares(numeros);
console.log(numerosPares);
