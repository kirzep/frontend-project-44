import readlineSync from 'readline-sync';

// Функция для генерации случайного числа (1 - 20)
export const getRandomNumber = (min = 1, max = 20) => {
  const minCopy = Math.ceil(min);
  const maxCopy = Math.floor(max);
  return Math.floor(Math.random() * (maxCopy - minCopy)) + minCopy;
};

// Функция для вывода правил игры
export const getGameRules = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'brain-progression':
      console.log('What number is missing in the progression?');
      break;
    case 'brain-prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      break;
  }
};

// Функция для проверки четности числа и вывода 'yes' или 'no'
export const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

// Функция для получения ответа от пользователя
export const getUserAnswer = () => readlineSync.question('Your answer: ');

// Функция для определения исхода игры
export const getGameResult = (result, name) => {
  switch (result) {
    case 'GameOver':
      console.log(`Let's try again, ${name}!`);
      break;
    case 'GameWin':
      console.log(`Congratulations, ${name}!`);
      break;
    default:
      break;
  }
};

// Функция для выбора случайного математического знака
export const getRandomMathSign = () => {
  const mathSigns = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * mathSigns.length);
  return mathSigns[randomIndex];
};

// Функция для получения результата математической операции со случайным знаком
export const getCalcResult = (number1, number2, mathSign) => {
  let result;
  switch (mathSign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

// Функция для нахождения наибольшего общего делителя (НОД) двух чисел
// Реализованная через алгоритм Евклида
export const findGCD = (num1, num2) => {
  let absoluteNum1 = Math.abs(num1);
  let absoluteNum2 = Math.abs(num2);

  while (absoluteNum2 !== 0) {
    const temp = absoluteNum2;
    absoluteNum2 = absoluteNum1 % absoluteNum2;
    absoluteNum1 = temp;
  }

  return absoluteNum1;
};

// Функция для создания арифметической прогрессии
export const generateProgression = (start, difference, length) => {
  const progression = [];
  let current = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += difference;
  }

  return progression;
};

// Функция для выбора случайного числа для замены и возвращения правильного ответа
export const generateHiddenNumber = (progression) => {
  const progressionCopy = [...progression];
  const hiddenIndex = getRandomNumber(0, progressionCopy.length - 1);
  const correctAnswer = progressionCopy[hiddenIndex];
  progressionCopy[hiddenIndex] = '..';

  return [progressionCopy, correctAnswer];
};

// Функция для проверки числа на простоту
export const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
