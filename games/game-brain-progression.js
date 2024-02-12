import {
  generateHiddenNumber, generateProgression, getRandomNumber, getUserAnswer,
} from '../src/index.js';

const brainProgressionGame = () => {
  let i = 0;
  while (i < 3) {
    const start = getRandomNumber(1, 30);
    const difference = getRandomNumber(1, 10);
    const length = 10;
    const tempProgression = generateProgression(start, difference, length);
    // Данная функция вернет массив, первый элемент которого сама прогрессия, а второй ответ
    const progressionAndAnswer = generateHiddenNumber(tempProgression);
    const shownProgression = progressionAndAnswer[0].join(' ');
    const rightAnswer = progressionAndAnswer[1];
    console.log(`Question: ${shownProgression}`);
    const userAnswer = getUserAnswer();
    const numberedUserAnswer = Number(userAnswer);
    if (numberedUserAnswer === rightAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return 'GameOver';
    }
  }
  return 'GameWin';
};

export default brainProgressionGame;
