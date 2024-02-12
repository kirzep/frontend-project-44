import { getRandomNumber, getUserAnswer, isPrime } from '../src/index.js';

const brainPrimeGame = () => {
  let i = 0;
  while (i < 3) {
    const randomNumber = getRandomNumber(1, 50);
    const rightAnswer = isPrime(randomNumber);
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

export default brainPrimeGame;
