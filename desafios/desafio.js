let precoCombustivel = 4.99;
let kmPorLitros = 8;
let distanciaViagemKm = 80;

let litrosUsados = distanciaViagemKm / kmPorLitros;
let valorTotallitros = precoCombustivel * litrosUsados;

console.log(valorTotallitros.toFixed(2));