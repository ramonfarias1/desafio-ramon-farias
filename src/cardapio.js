class Cardapio {
    constructor() {
      this.itens = {
        cafe: 3,
        chantily: 1.5,
        suco: 6.2,
        sanduiche: 6.5,
        queijo: 2,
        salgado: 7.25,
        combo1: 9.5,
        combo2: 7.5,
      };
  
      this.extras = {
        chantily: 'cafe',
        queijo: 'sanduiche',
      };
    };

    isExtra(codigo) {
      return !!this.extras[codigo];
    };
  
    retornaPrincipalDoExtra(codigo) {
      return this.extras[codigo];
    };
};
  
export { Cardapio };