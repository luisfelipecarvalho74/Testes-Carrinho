export default class Item {
    nome: string;
    valor: number;
    quantidade: number;

    constructor(nome: string, valor: number, quantidade: number) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }

    pegaValorTotalItem() {
        return this.quantidade * this.valor;
    }
}