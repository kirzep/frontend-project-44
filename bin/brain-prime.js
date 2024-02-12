#!/usr/bin/env node

import brainPrimeGame from '../games/game-brain-prime.js';
import greetings from '../src/cli.js';
import { getGameResult, getGameRules } from '../src/index.js';

const name = greetings();
getGameRules('brain-prime');
getGameResult(brainPrimeGame(), name);
