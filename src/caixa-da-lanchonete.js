import { Cardapio } from './cardapio.js';

class CaixaDaLanchonete {
  constructor() {
    this.cardapio = new Cardapio();
    this.metodosDePagamento = ['dinheiro', 'debito', 'credito'];
    this.descontoDinheiro = 0.05;
    this.taxaCredito = 0.03;
  };

  calcularValorDaCompra(metodoDePagamento, itens) {

    if (!Array.isArray(itens) || itens.some( (item) => typeof item !== 'string') || itens.length === 0)
      return 'Não há itens no carrinho de compra!';

    if (!metodoDePagamento || !this.metodosDePagamento.includes(metodoDePagamento))
      return 'Forma de pagamento inválida!';

    let precoTotal = 0;
    for (const item of itens) {
      const [codigo, quantidade] = item.split(',');

      if (!this.cardapio.itens[codigo])
        return 'Item inválido!';

      if (Number(quantidade) <= 0)
        return 'Quantidade inválida!';

      if (this.cardapio.isExtra(codigo) && !itens.join().includes(this.cardapio.retornaPrincipalDoExtra(codigo)))
        return 'Item extra não pode ser pedido sem o principal';

      precoTotal += this.cardapio.itens[codigo] * Number(quantidade);
    };

    if (metodoDePagamento === 'dinheiro')
      return `R$ ${(precoTotal - precoTotal * this.descontoDinheiro).toFixed(2).replace('.', ',')}`;

    if (metodoDePagamento === 'credito')
      return `R$ ${(precoTotal + precoTotal * this.taxaCredito).toFixed(2).replace('.', ',')}`;

    return `R$ ${precoTotal.toFixed(2).replace('.', ',')}`;
  };

};

const caixaLanchonete = new CaixaDaLanchonete();
console.log(caixaLanchonete.calcularValorDaCompra('dinheiro', ['cafe,1', 'chantily,1']));

export { CaixaDaLanchonete };