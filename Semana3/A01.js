const conta = {
    numero: 234355,
    _saldo: 100,

    deposito: function(valor){
        this._saldo += valor;
    },
    getSaldo: function(){
        return this._saldo;
    }
}

conta.deposito(100);
console.log(conta.getSaldo());
