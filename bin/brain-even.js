#!/usr/bin/env node

import brainEvenGame from '../games/game-brain-even.js';
import Greetings from '../src/cli.js';
import { GameResult, getGameRules } from '../src/index.js';

const name = Greetings();
getGameRules('brain-even');
GameResult(brainEvenGame(), name);
