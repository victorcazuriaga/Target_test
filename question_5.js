/* 5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/
const input = 'target';
export const reverseString = (text) => {
  let reversedString = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversedString += text[i];
  }
  return reversedString;
};
console.log(reverseString(input));
