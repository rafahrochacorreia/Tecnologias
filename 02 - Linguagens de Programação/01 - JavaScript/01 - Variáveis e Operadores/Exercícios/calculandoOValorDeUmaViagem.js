// Faça um programa para calcular o valor de uma viagem.
// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;
// Imprima no console o valor que será gasto para realizar esta viagem.



let preçoCombustivel = 4.5;
let kmLitro = 12;
let distancia = 480;

let valorGasto = (distancia / kmLitro) * preçoCombustivel;

console.log('O valor gasto para realizar essa viagem é de R$: ' + valorGasto.toFixed(2) + ' reais.');

// toFixed(2) Método utilizado para apresentar (nesse caso), 2 casas decimais

