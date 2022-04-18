function compareTrue(compareTrueParam1, compareTrueParam2) {
  if (compareTrueParam1 && compareTrueParam2 === true) {
    return true;
  } else {
    return false;
  }
}

compareTrue();

function calcArea(base, height) {
  return (base * height) / 2;
}

calcArea();

function splitSentence(splitSentenceParam) {
  let splitSentenceAnswer = splitSentenceParam.split(' ');
  return splitSentenceAnswer;
}

splitSentence();

function concatName(concatNameParam) {
  return concatNameParam[concatNameParam.length] + ', ' + concatNameParam[0] + '.';
}

concatName();

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

footballPoints();

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

highestCount();

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
};

catAndMouse();

function fizzBuzz(fizzBuzzParam) {
  let fizzBuzzAnswer = [];
  for (let index = 0; index < fizzBuzzParam.length; index += 1) {
    if (fizzBuzzParam[index] % 3 === 0 && fizzBuzzParam[index] % 5 !== 0) {
      fizzBuzzAnswer.push("fizz");
    }
    if (fizzBuzzParam[index] % 5 === 0 && fizzBuzzParam[index] % 3 !== 0) {
      fizzBuzzAnswer.push("buzz");
    }
    if (fizzBuzzParam[index] % 5 === 0 && fizzBuzzParam[index] % 3 === 0) {
      fizzBuzzAnswer.push("fizzBuzz");
    } else {
      fizzBuzzAnswer.push("bug!");
    }
  }
  return fizzBuzzAnswer;
}

fizzBuzz();

function encode(encodeParam) {
  let encodeAnswer = '';
  for (let index = 0; index < encodeParam.length; index += 1) {
    if (encodeParam[index] === 'a') {
      encodeAnswer = encodeAnswer + 1;
    } else if (encodeParam[index] === 'e') {
      encodeAnswer = encodeAnswer + 2;
    } else if (encodeParam[index] === 'i') {
      encodeAnswer = encodeAnswer + 3;
    } else if (encodeParam[index] === 'o') {
      encodeAnswer = encodeAnswer + 4;
    } else if (encodeParam[index] === 'u') {
      encodeAnswer = encodeAnswer + 5;
    } else {
      encodeAnswer = encodeAnswer + encodeParam[index];
    }
  }
  return encodeAnswer;
}

encode();

function decode(decodeParam) {
  let decodeAnswer = '';
  for (let index = 0; index < decodeParam.length; index += 1) {
    if (decodeParam[index] === '1') {
      decodeAnswer = decodeAnswer + 'a';
    } else if (decodeParam[index] === '2') {
      decodeAnswer = decodeAnswer + 'e';
    } else if (decodeParam[index] === '3') {
      decodeAnswer = decodeAnswer + 'i';
    } else if (decodeParam[index] === '4') {
      decodeAnswer = decodeAnswer + 'o';
    } else if (decodeParam[index] === '5') {
      decodeAnswer = decodeAnswer + 'u';
    } else {
      decodeAnswer = decodeAnswer + decodeParam[index];
    }
  }
  return decodeAnswer;
}

decode();

function generatePhoneNumber(generatePhoneNumberParam) {
  let generatePhoneNumberAnswer = '(' + generatePhoneNumberParam[0] + generatePhoneNumberParam[1] + ') ';
  for (let index = 2; index < generatePhoneNumberParam.length - 4; index += 1) {
    generatePhoneNumberAnswer = generatePhoneNumberAnswer + (generatePhoneNumberParam[index]);
  }
  generatePhoneNumberAnswer = generatePhoneNumberAnswer + '-';
  for (let index = 7; index < generatePhoneNumberParam.length; index += 1) {
    generatePhoneNumberAnswer = generatePhoneNumberAnswer + (generatePhoneNumberParam[index]);
  }
  if (generatePhoneNumberParam.length !== 11) {
    generatePhoneNumberAnswer = 'Array com tamanho incorreto';
  }
  for (let index = 0; index < generatePhoneNumberParam.length; index += 1) {
    if (generatePhoneNumberParam[index] < 0 || generatePhoneNumberParam[index] > 9) {
      generatePhoneNumberAnswer = "não é possível gerar um número de telefone com esses valores";
    }
  }
  return generatePhoneNumberAnswer;
}

generatePhoneNumber();

function triangleCheck(lineA, lineB, lineC) {
  let triangleVialiliy = false;
  if (lineA < 0) {
    lineA = lineA * -1;
  }
  if (lineB < 0) {
    lineB = lineB * -1;
  }
  if (lineC < 0) {
    lineC = lineC * -1;
  }
  if ((lineB - lineC) < lineA < (lineB + lineC) || (lineA - lineC) < lineB < (lineA + lineC) || (lineA - lineB) < lineC < (lineA + lineB)) {
    triangleVialiliy = true;
  } else {
    triangleVialiliy = false;
  }
  return triangleVialiliy;
}

triangleCheck();