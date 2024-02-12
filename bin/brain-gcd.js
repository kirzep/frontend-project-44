#!/usr/bin/env node

import brainGcdGame from '../games/game-brain-gcd.js';
import greetings from '../src/cli.js';
import { getGameResult, getGameRules } from '../src/index.js';

const name = greetings();
getGameRules('brain-gcd');
getGameResult(brainGcdGame(), name);
