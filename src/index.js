import readlineSync from 'readline-sync';

// Функция для генерации случайного числа (1 - 20)
export const getRandomNumber = () => Math.floor(Math.random() * 20);

// Функция для вывода правил игры
export const getGameRules = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
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
