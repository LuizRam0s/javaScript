class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const carro1 = new Carro('Fiat', 'azul', 1/10);
console.log(carro1.calcularGastoDePercurso(70, 5));
const carro2 = new Carro('Nissan', 'verde', 1/20);
console.log(carro2.calcularGastoDePercurso(100, 5));

console.log(carro1); 
console.log(carro2);