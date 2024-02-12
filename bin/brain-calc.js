#!/usr/bin/env node

import brainCalcGame from '../games/game-brain-calc.js';
import greetings from '../src/cli.js';
import { getGameResult, getGameRules } from '../src/index.js';

const name = greetings();
getGameRules('brain-calc');
getGameResult(brainCalcGame(), name);
