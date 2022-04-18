//Desafio 1

function compareTrue(compareTrueParam1, compareTrueParam2) {
  let compareTrueAnswer = false;
  if (compareTrueParam1 && compareTrueParam2 === true) {
    compareTrueAnswer = true;
  }
  return compareTrueAnswer;
}

// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}

//Desafio 3

function splitSentence(splitSentenceParam) {
  let splitSentenceAnswer = splitSentenceParam.split(' ');
  return splitSentenceAnswer;
}

//Desafio 4

function concatName(concatNameParam) {
  return concatNameParam[concatNameParam.length] + ', ' + concatNameParam[0] + '.';
}

//Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

//Desafio 6

function highestCount(highestCountParam) {
  let maxValue = 0;
  let maxValueOcurrence = 0;
  for (let index = 0; index < highestCountParam.length; index += 1) {
    if (highestCountParam[index] > maxValue) {
      maxValue = highestCountParam[index];
    }
  }
  for (let index = 0; index < highestCountParam.length; index += 1) {
    if (highestCountParam[index] === maxValue) {
      maxValueOcurrence += 1;
    }
  }
  return maxValueOcurrence;
}

//Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  let catAndMouseAnswer = null;
  if (mouse < 0) {
    mouse = (mouse * -1);
  }
  if (cat1 < 0) {
    cat1 = (cat1 * -1);
  }
  if (cat2 < 0) {
    cat2 = (cat2 * -1);
  }
  if (cat1 >= mouse) {
    cat1Distance = cat1 - mouse;
  } else {
    cat1Distance = mouse - cat1;
  }
  if (cat2 >= mouse) {
    cat2Distance = cat2 - mouse;
  } else {
    cat2Distance = mouse - cat2;
  }
  if (cat1Distance > cat2Distance) {
    catAndMouseAnswer = 'cat1';
  } else if (cat2Distance > cat1Distance) {
    catAndMouseAnswer = 'cat2';
  } else {
    catAndMouseAnswer = 'os gatos trombam e o rato foge';
  }
  return catAndMouseAnswer;
}

//Desafio 8

function fizzBuzz(fizzBuzzParam) {
  let fizzBuzzAnswer = [];
  for (let index = 0; index < fizzBuzzParam.length; index += 1) {
    if (fizzBuzzParam[index] % 3 === 0 && fizzBuzzParam[index] % 5 !== 0) {
      fizzBuzzAnswer.push('fizz');
    }
    if (fizzBuzzParam[index] % 5 === 0 && fizzBuzzParam[index] % 3 !== 0) {
      fizzBuzzAnswer.push('buzz');
    }
    if (fizzBuzzParam[index] % 5 === 0 && fizzBuzzParam[index] % 3 === 0) {
      fizzBuzzAnswer.push('fizzBuzz');
    } else {
      fizzBuzzAnswer.push('bug!');
    }
  }
  return fizzBuzzAnswer;
}

//Desafio 9

function encode(encodeParam) {
  let encodeAnswer = '';
  for (let index = 0; index < encodeParam.length; index += 1) {
    if (encodeParam[index] === 'a') {
      encodeAnswer += 1;
    } else if (encodeParam[index] === 'e') {
      encodeAnswer += 2;
    } else if (encodeParam[index] === 'i') {
      encodeAnswer += 3;
    } else if (encodeParam[index] === 'o') {
      encodeAnswer += 4;
    } else if (encodeParam[index] === 'u') {
      encodeAnswer += 5;
    } else {
      encodeAnswer += encodeParam[index];
    }
  }
  return encodeAnswer;
}

function decode(decodeParam) {
  let decodeAnswer = '';
  for (let index = 0; index < decodeParam.length; index += 1) {
    if (decodeParam[index] === '1') {
      decodeAnswer += 'a';
    } else if (decodeParam[index] === '2') {
      decodeAnswer += 'e';
    } else if (decodeParam[index] === '3') {
      decodeAnswer += 'i';
    } else if (decodeParam[index] === '4') {
      decodeAnswer += 'o';
    } else if (decodeParam[index] === '5') {
      decodeAnswer += 'u';
    } else {
      decodeAnswer += decodeParam[index];
    }
  }
  return decodeAnswer;
}

//Desafio 11

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

//Desafio 12

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
