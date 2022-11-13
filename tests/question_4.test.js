import { representationByState } from '../question_4';

const dataMock = [
  { state: 'SP', value: 60 },
  { state: 'RJ', value: 20 },
  { state: 'MG', value: 30 },
  { state: 'ES', value: 40 },
  { state: 'Outros', value: 50 },
];

describe('Test isFibonnaciNumber function', () => {
  test('get the correct percent representation of each state', () => {
    let expected = [
      { state: 'SP', percent: 30 },
      { state: 'RJ', percent: 10 },
      { state: 'MG', percent: 15 },
      { state: 'ES', percent: 20 },
      { state: 'Outros', percent: 25 },
    ];
    let result = representationByState(dataMock);
    expect(result).toStrictEqual(expected);
  });
});
