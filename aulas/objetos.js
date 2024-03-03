const pessoa = {
    nome: 'Luiz Fernando',
    idade: 19,
    altura: 1.82,

    descrever: function () {
    console.log(`Meu nome é ${this.nome}, minha idade ${this.idade} e altura ${this.altura}.`);
    }
};

pessoa.descrever();