import { reverseString } from '../question_5';

let stringMock = 'target';

describe('Test isFibonnaciNumber function', () => {
  test('reverse string correctly', () => {
    let expected = 'tegrat';
    let result = reverseString(stringMock);

    expect(result).toBe(expected);
  });
});
