import {
  minBillingMoth,
  maxBillingMoth,
  averageBillingMoth,
} from '../question_3';

const dataMock = [
  {
    dia: 1,
    valor: 2003.1664,
  },
  {
    dia: 2,
    valor: 6000.6698,
  },
  {
    dia: 3,
    valor: 6229457.6134,
  },
  {
    dia: 4,
    valor: 0.0,
  },
];

describe('Test minBillingMoth function', () => {
  test('should ignore value 0 ', () => {
    let result = minBillingMoth(dataMock);

    expect(result).not.toEqual(0);
  });
  test('if min value is equal 2003.1664', () => {
    let expected = 2003.1664;
    let result = minBillingMoth(dataMock);

    expect(result).toBe(expected);
  });
});

describe('Test maxBillingMoth function', () => {
  test('if min value is equal 6229457.6134', () => {
    let expected = 6229457.6134;
    let result = maxBillingMoth(dataMock);

    expect(result).toBe(expected);
  });
});

describe('Test averageBillingMoth function', () => {
  test('get the correct average', () => {
    let expected =
      dataMock.reduce((acc, cur) => cur.valor + acc, 0) /
      (dataMock.length - dataMock.filter((el) => el.valor === 0).length);
    let result = averageBillingMoth(dataMock);

    expect(result).toBe(expected);
  });
});
