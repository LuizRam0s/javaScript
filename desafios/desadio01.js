/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanol = 3.42;
let precoGasolina = 5.58;
let tipoCombustivel = 'Gasolina';
let kmPorLitro = 10;
let distancaViagemKm = 100;

if (tipoCombustivel === 'Etanol') {
    let valorTotalViagem = (distancaViagemKm / kmPorLitro) * precoEtanol;
    console.log(valorTotalViagem.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    let valorTotalViagem = (distancaViagemKm / kmPorLitro) * precoGasolina;
    console.log(valorTotalViagem.toFixed(2));
} else {
    console.log('Valor invalido');
}