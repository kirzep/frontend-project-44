import {
  getRandomNumber, getUserAnswer, isEven,
} from '../src/index.js';

const brainEvenGame = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber();
    const rightAnswer = isEven(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      return 'GameOver';
    }
  }
  return 'GameWin';
};

export default brainEvenGame;
