export default class Conta {
    saldo: number = 0;
    deposito: number = 0;
    saque: number = 0;

    deposita(valor: number ) {
        if (valor <= 0) throw new Error('Valor de depósito inválido!');
        this.deposito += valor;
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= 0) throw new Error('Valor de saque inválido!');
        if (valor > this.saldo) throw new Error('Saldo insuficiente!');
        this.saque += valor;
        this.saldo -= valor;
    }
    
    getSaldo() {
        return this.saldo;
    }
}
