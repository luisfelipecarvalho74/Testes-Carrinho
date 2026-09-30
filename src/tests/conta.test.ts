import Conta from "../entities/conta";

describe('Conta', () => {
    test('Deve depositar o valor corretamente e aumentar o saldo', () => {
        const conta = new Conta();
        conta.deposita(100);
        expect(conta.getSaldo()).toBe(100);
    });

    test('Deve lançar erro ao tentar depositar valor inválido', () => {
        const conta = new Conta();
        expect(() => conta.deposita(-50)).toThrow('Valor de depósito inválido!');
    });

    test('Deve sacar o valor corretamente e diminuir o saldo', () => {
        const conta = new Conta();
        conta.deposita(100);
        expect(() => conta.sacar(50)).not.toThrow();
        expect(conta.getSaldo()).toBe(50);
    });

    test('Deve lançar erro ao tentar sacar valor inválido ou maior que o saldo', () => {
        const conta = new Conta();
        expect(() => conta.sacar(-50)).toThrow('Valor de saque inválido!');
        expect(() => conta.sacar(100)).toThrow('Saldo insuficiente!');
    });

    
});