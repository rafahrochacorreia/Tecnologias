// Faça um programa para calcular o valor de uma viagem.
// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.


const etanol = 3.10;
const gasolina = 4.60;

const tipoCombustivel = 'etanol';

const kmEtanol = 10;
const kmGasolina = 14;

const distancia = 480;

const litrosConsumidosEta = (distancia / kmEtanol);
const litrosConsumidosGas = (distancia / kmGasolina);


function valorGasto() {
  if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosConsumidosGas * gasolina;
    return valorGasto.toFixed(2);
  } else {
    const valorGasto = litrosConsumidosEta * etanol;
    return valorGasto.toFixed(2);
  }
}

console.log(valorGasto());

valorGasto();
