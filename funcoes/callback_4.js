const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 600.90},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.22},
];

const getNome = item => item.nome;
console.log(carrinho.map(getNome));

const getTotal = item => item.qtde * item.preco;
const total = carrinho.map(getTotal);
console.log(total);

