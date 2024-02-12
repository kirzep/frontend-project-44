import readlineSync from 'readline-sync';

// Функция для генерации случайного числа (1 - 100)
export const getRandomNumber = () => Math.floor(Math.random() * 100);

// Функция для вывода правил игры
export const getGameRules = (gameName) => {
  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
export const GameResult = (result, name) => {
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
