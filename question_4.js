/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/

const data = [
  { state: 'SP', value: 67836.43 },
  { state: 'RJ', value: 36678.66 },
  { state: 'MG', value: 29229.88 },
  { state: 'ES', value: 27165.48 },
  { state: 'Outros', value: 19849.53 },
];
export const representationByState = (data) => {
  let total = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    total += data[i].value;
  }
  console.log(total);
  for (let i = 0; i < data.length; i++) {
    result.push({
      state: data[i].state,
      percent: (data[i].value / total) * 100,
    });
  }
  return result;
};
console.log(representationByState(data));
