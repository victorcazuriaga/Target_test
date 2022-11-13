/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

import data from './data/dados.json' assert { type: 'json' };

export const minBillingMoth = (data) => {
  let minValue = data[0].valor;
  for (let i = 1; i < data.length; i++) {
    let nextValue = data[i].valor;
    if (nextValue !== 0 && nextValue < minValue) {
      minValue = nextValue;
    }
  }
  return minValue;
};
console.log(minBillingMoth(data));

export const maxBillingMoth = (data) => {
  let maxValue = data[0].valor;
  for (let i = 1; i < data.length; i++) {
    let nextValue = data[i].valor;
    if (nextValue !== 0 && nextValue > maxValue) {
      maxValue = nextValue;
    }
  }
  return maxValue;
};
console.log(maxBillingMoth(data));

export const averageBillingMoth = (data) => {
  let totalValue = data[0].valor;
  let dayoff = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].valor === 0) {
      dayoff += 1;
    }
    totalValue += data[i].valor;
  }
  return totalValue / (data.length - dayoff);
};
console.log(averageBillingMoth(data));
