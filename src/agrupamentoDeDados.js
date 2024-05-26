/*Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.*/

function agruparPorCategoria(produtos) {
  let totalPorCategoria = {};

  produtos.forEach((produto) => {
    //verificação para criar uma categoria no objeto totalCategoria caso ela ainda nao exista. serão criados a categoria "eletrônicos", "livros" e "roupas"
    if (!totalPorCategoria[produto.categoria]) {
      //se existir a categoria, ela será iniciada com o valor 0
      totalPorCategoria[produto.categoria] = 0;
    }

    //faz a soma dos produtos por categoria
    totalPorCategoria[produto.categoria] += produto.preco;
  });

  return totalPorCategoria;
}

let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];
console.log(agruparPorCategoria(produtos));
// {
// eletrônicos: 299.98,
// livros: 49.98,
// roupas: 49.99
// }
