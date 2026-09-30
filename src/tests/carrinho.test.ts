import Carrinho from "../entities/carrinho";
import Item from "../entities/item";

describe('Carrinho', () => {
    test('Cria um carrinho com item, subtotal, frete e subtotal', () => {
        const carrinho = new Carrinho();
        const item = new Item('Caneta', 1.5, 3);

        // Adiciona o item ao carrinho, adiciona frete e calcula o total
        carrinho.adiciona(item);
        carrinho.adicionaFrete(10);
        carrinho.calculaTotal();

        // Verifica se o item foi adicionado corretamente e se os valores estão corretos
        expect(carrinho.itens).toContainEqual(item);
        expect(carrinho.subtotal).toBe(4.5);
        expect(carrinho.frete).toBe(10);
        expect(carrinho.total).toBe(14.5);
    });

    test('Deve lançar erro se finalizar compra com carrinho vazio', () => {
        const carrinho = new Carrinho();
        expect(() => carrinho.finalizaCompra()).toThrow('Carrinho de compras vazio');
    });
});