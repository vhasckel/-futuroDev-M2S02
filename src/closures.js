/*Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.*/

function contador() {
  let valorAtual = 0;

  return function () {
    valorAtual += 1;
    return valorAtual;
  };
}

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2
