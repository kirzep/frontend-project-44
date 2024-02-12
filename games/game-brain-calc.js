import {
  getCalcResult, getRandomMathSign, getRandomNumber, getUserAnswer,
} from '../src/index.js';

const brainCalcGame = () => {
  let i = 0;
  while (i < 3) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const mathSign = getRandomMathSign();
    const rightAnswer = getCalcResult(number1, number2, mathSign);
    console.log(`Question: ${number1} ${mathSign} ${number2}`);
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

export default brainCalcGame;
