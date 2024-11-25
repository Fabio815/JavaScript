class Conta{
    constructor(conta, saldo){
        this.conta = conta;
        this._saldo = saldo;
    }

   getSaldo = () => {return this._saldo}

    deposito = (valor) => {
        this._saldo += valor;
    }
    sacar (valor){
        this._saldo -= valor;
    }

    transferencia(conta, valor){
        if(this._saldo >= valor){
            this.sacar(valor);
            conta.deposito(valor);
        }
    }
    exibir = () =>{
        console.log(`Conta: ${this.conta}, Saldo ${this._saldo}`);
    }
}
const contaJose = new Conta(111, 0);
console.log(contaJose.getSaldo());


const contaRomario = new Conta(222, 400);
console.log(contaRomario.getSaldo());

contaRomario.transferencia(contaJose, 300);

contaRomario.exibir();
contaJose.exibir();
