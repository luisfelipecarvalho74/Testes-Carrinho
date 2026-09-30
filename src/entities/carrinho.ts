import Item from "./item";


export default class Carrinho {
    itens: Item[] = [];
    subtotal: number | null = null;
    frete: number | null = null;
    total: number | null = null;

    adiciona(item: Item) {
        this.itens.push(item);
    }
    adicionaFrete(valor: number) {
        this.frete = valor
    }
    calculaTotal() {
        this.subtotal = this.itens.reduce((acum, item) => acum + item.pegaValorTotalItem(), 0);
        this.total = this.subtotal + (this.frete ?? 0);
        return this.total;
    }
    finalizaCompra() {
        if (this.itens.length === 0) throw new Error('Carrinho de compras vazio');
        this.calculaTotal();
        return { subtotal: this.subtotal, frete: this.frete, total: this.total };
    }
}