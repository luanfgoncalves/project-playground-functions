//1 - Crie uma função usando o operador &&

//JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, 
//e retorna false se algum dos valores não o for.

//Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:

//Retornar true se ambos os valores forem verdadeiros;
//Retornar false se um ou ambos os parâmetros forem falsos.

function compareTrue(compareTrueParam1, compareTrueParam2) {
  if (compareTrueParam1 && compareTrueParam2 === true) {
    return true;
  } else {
    return false;
  }
}

//2 - Crie uma função que calcule a área de um triângulo

//Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) 
//de um triângulo e retorne o cálculo da sua área.

//Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

function calcArea(base, height) {
  return (base * height) / 2
}

//3 - Crie uma função que divida a frase
//Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada 
//espaço na string original.

//Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].

function splitSentence(splitSentenceParam) {
  let splitSentenceAnswer = splitSentenceParam.split(' ');
  return splitSentenceAnswer
}

//4 - Crie uma função que use concatenação de strings
//Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 
//'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

//Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], 
//a função deverá retornar Paolillo, Lucas.

function splitSentence(splitSentenceParam) {
  return splitSentenceParam[splitSentenceParam.length] + ', ' + splitSentenceParam[0] + '.';
}

//5 - Crie uma função que calcule a quantidade de pontos no futebol
//Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número 
//de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

//Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

//6 - Crie uma função que calcule a repetição do maior número
//Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior 
//deles se repete.

//Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, 
//que é a quantidade de vezes que o número 9 (maior número do array) se repete.

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

//7 - Crie uma função de Caça ao Rato
//Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. 
//Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

//Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as 
//distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro 
//(aquele que estiver mais perto do rato).

//Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

//Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  let catAndMouseAnswer = null;
  if (mouse < 0) {
    mouse = (mouse * -1)
  };
  if (cat1 < 0) {
    cat1 = (cat1 * -1)
  };
  if (cat2 < 0) {
    cat2 = (cat2 * -1)
  };
  if (cat1 >= mouse) {
    cat1Distance = cat1 - mouse
  } else {
    cat1Distance = mouse - cat1
  };
  if (cat2 >= mouse) {
    cat2Distance = cat2 - mouse
  } else {
    cat2Distance = mouse - cat2
  };
  if (cat1Distance > cat2Distance) {
    catAndMouseAnswer = 'cat1'
  } else if (cat2Distance > cat1Distance) {
    catAndMouseAnswer = 'cat2'
  } else {
    catAndMouseAnswer = 'os gatos trombam e o rato foge'
  }
  return catAndMouseAnswer
};

//8 - Crie uma função FizzBuzz
//Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

//Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
//Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
//Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
//Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
//Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

function fizzBuzz(fizzBuzzParam){
  let fizzBuzzAnswer = [];
  for (let index = 0; index < fizzBuzzParam.length; index += 1) {
    if (fizzBuzzParam[index] % 3 === 0 && fizzBuzzParam[index] % 5 !== 0){
      fizzBuzzAnswer.push("fizz");
    }
    if (fizzBuzzParam[index] % 5 === 0 && fizzBuzzParam[index] % 3 !== 0){
      fizzBuzzAnswer.push("buzz");
    }
    if (fizzBuzzParam[index] % 5 == 0 && fizzBuzzParam[index] % 3 === 0){
      fizzBuzzAnswer.push("fizzBuzz");
    } else {
      fizzBuzzAnswer.push("bug!");
    }
  }
    return fizzBuzzAnswer;
}

//9 - Crie uma função que Codifique e Decodifique
//Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais 
//minúsculas por números, de acordo com o formato a seguir:

//a -> 1
//e -> 2
//i -> 3
//o -> 4
//u -> 5

//Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

//A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar 
//de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja 
//"h3 th2r2!", o retorno deverá ser "hi there!").

function encode(encodeParam){
  let encodeAnswer= '';
  for (let index = 0; index < encodeParam.length; index += 1){
    if (encodeParam[index] === 'a'){
      encodeAnswer = encodeAnswer + 1;
    } else if (encodeParam[index] === 'e'){
      encodeAnswer = encodeAnswer + 2;
    } else if (encodeParam[index] === 'i'){
      encodeAnswer = encodeAnswer + 3;
    } else if (encodeParam[index] === 'o'){
      encodeAnswer = encodeAnswer + 4;
    } else if (encodeParam[index] === 'u'){
      encodeAnswer = encodeAnswer + 5;
    } else {
      encodeAnswer = encodeAnswer + encodeParam[index];
    }
  }
  return encodeAnswer;
}

function decode(decodeParam){
  let decodeAnswer= '';
  for (let index = 0; index < decodeParam.length; index += 1){
    if (decodeParam[index] === '1'){
      decodeAnswer = decodeAnswer + 'a';
    } else if (decodeParam[index] === '2'){
      decodeAnswer = decodeAnswer + 'e';
    } else if (decodeParam[index] === '3'){
      decodeAnswer = decodeAnswer + 'i';
    } else if (decodeParam[index] === '4'){
      decodeAnswer = decodeAnswer + 'o';
    } else if (decodeParam[index] === '5'){
      decodeAnswer = decodeAnswer + 'u';
    } else {
      decodeAnswer = decodeAnswer + decodeParam[index];
    }
  }
  return decodeAnswer;
}

//10 - Crie uma função de Lista de Tecnologias
//Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo 
//parâmetro chamado name com um nome.

//Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

//{
//  tech: "NomeTech",
//  name: name
//}
//Estes objetos devem ser inseridos em uma nova lista em ordem alfabética a partir do campo tech no objeto.

//A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

function 'Lista de Tecnologias'(){}


//11 - Crie uma função de Número de Telefone
//Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, 
//respeitando parênteses, traços e espaços.

//Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar 
//(12) 34567-8901.

//Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

//Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber 
//deverá retornar a string "não é possível gerar um número de telefone com esses valores".

function generatePhoneNumber(generatePhoneNumberParam){
  let generatePhoneNumberAnswer = "(" + generatePhoneNumberParam[0] + generatePhoneNumberParam[1] + ") ";
  for (let index = 2; index < generatePhoneNumberParam.length-4; index += 1){
    generatePhoneNumberAnswer = generatePhoneNumberAnswer + (generatePhoneNumberParam[index]);
  }
  generatePhoneNumberAnswer = generatePhoneNumberAnswer + '-';
  for (let index = 7; index < generatePhoneNumberParam.length; index += 1){
    generatePhoneNumberAnswer = generatePhoneNumberAnswer + (generatePhoneNumberParam[index]);
  }
  if (generatePhoneNumberParam.length !== 11){
    generatePhoneNumberAnswer = 'Array com tamanho incorreto';
  }
  for (let index = 0; index < generatePhoneNumberParam.length; index += 1){
    if (generatePhoneNumberParam[index] < 0 || generatePhoneNumberParam[index] > 9 ){
      generatePhoneNumberAnswer = "não é possível gerar um número de telefone com esses valores";
    }
  }
  return generatePhoneNumberAnswer;
}


//12 - Crie uma função de Condição de existência de um triângulo
//Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber 
//as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

//Para tanto, tenha em mente algumas considerações:

//Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das 
//medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

//Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

//O retorno da sua função deverá ser um booleano.

function triangleCheck(lineA, lineB, lineC){
  let triangleVialiliy = false;
  if (lineA < 0){
    lineA = lineA * -1; 
  }
  if (lineB < 0){
    lineB = lineB * -1; 
  }
  if (lineC < 0){
    lineC = lineC * -1; 
  }
  if ( (lineB-lineC) < lineA < (lineB+lineC) || (lineA-lineC) < lineB < (lineA+lineC) || (lineA-lineB) < lineC < (lineA+lineB) ){
    triangleVialiliy = true;
  } else {
    triangleVialiliy = false;
  }
  return triangleVialiliy;
}

//13 - Crie uma função de boas vindas ao Bar da Trybe!
//Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

//Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber.

function hydrate(hydrateParam)
