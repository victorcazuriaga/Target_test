import { sumValues } from '../question_1';

describe('Test sumValues function', () => {
  test('if sum is 91', () => {
    let indice = 13;
    let soma = 0;
    let k = 0;

    let expected = 91;
    let result = sumValues(indice, soma, k);

    expect(result).toBe(expected);
  });
  test('if sum is equal 595', () => {
    let indice = 34;
    let soma = 0;
    let k = 0;

    let expected = 595;
    let result = sumValues(indice, soma, k);

    expect(result).toBe(expected);
  });
});
