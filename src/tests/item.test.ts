import Item from "../entities/item";


describe('Item', () => {
    test('Cria um item com nome, valor e quantidade', () => {
        const item = new Item('Caneta', 1.5, 3);
        expect(item.nome).toBe('Caneta');
        expect(item.valor).toBe(1.5);
        expect(item.quantidade).toBe(3);
    });

    test('Calcula o valor total do item', () => {
        const item = new Item('Caneta', 1.5, 3);
        expect(item.pegaValorTotalItem()).toBe(4.5);
    });
});