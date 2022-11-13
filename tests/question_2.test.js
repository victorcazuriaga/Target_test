import { isFibonacciNumber } from '../question_2';

describe('Test isFibonnaciNumber function', () => {
  test('if the number 34 is a fibonacci  number', () => {
    let value = 34;
    let result = isFibonacciNumber(value);

    expect(result).toBeTruthy();
  });
  test('if the number 611 is a fibonacci  number', () => {
    let value = 611;
    let result = isFibonacciNumber(value);

    expect(result).toBeFalsy();
  });
});
