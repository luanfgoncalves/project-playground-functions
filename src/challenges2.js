// Desafio 11
function generatePhoneNumber(generatePhoneNumberParam) {
  let generatePhoneNumberAnswer = '(' + generatePhoneNumberParam[0] + generatePhoneNumberParam[1] + ') ';
  for (let index = 2; index < generatePhoneNumberParam.length - 4; index += 1) {
    generatePhoneNumberAnswer += (generatePhoneNumberParam[index]);
  }
  generatePhoneNumberAnswer += '-';
  for (let index = 7; index < generatePhoneNumberParam.length; index += 1) {
    generatePhoneNumberAnswer += (generatePhoneNumberParam[index]);
  }
  if (generatePhoneNumberParam.length !== 11) {
    generatePhoneNumberAnswer = 'Array com tamanho incorreto';
  }
  for (let index = 0; index < generatePhoneNumberParam.length; index += 1) {
    if (generatePhoneNumberParam[index] < 0 || generatePhoneNumberParam[index] > 9) {
      generatePhoneNumberAnswer = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return generatePhoneNumberAnswer;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleVialiliy = false;
  if (lineA < 0) {
    lineA *= -1;
  }
  if (lineB < 0) {
    lineB *= -1;
  }
  if (lineC < 0) {
    lineC *= -1;
  }
  if ((lineB - lineC) < lineA < (lineB + lineC) || (lineA - lineC) < lineB < (lineA + lineC) || (lineA - lineB) < lineC < (lineA + lineB)) {
    triangleVialiliy = true;
  } else {
    triangleVialiliy = false;
  }
  return triangleVialiliy;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
