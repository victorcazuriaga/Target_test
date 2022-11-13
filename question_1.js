/* 1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

let indice = 13;
let soma = 0;
let k = 0;
export const sumValues = (indice, soma, k) => {
  while (k < indice) {
    k += 1;
    soma += k;
  }
  return soma;
};
console.log(sumValues(indice, soma, k));
