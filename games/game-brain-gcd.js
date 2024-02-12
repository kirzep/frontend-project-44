import { findGCD, getRandomNumber, getUserAnswer } from '../src/index.js';

const brainGcdGame = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const rightAnswer = findGCD(randomNumber1, randomNumber2);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
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

export default brainGcdGame;
