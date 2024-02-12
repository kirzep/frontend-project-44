#!/usr/bin/env node

import brainEvenGame from '../games/game-brain-even.js';
import greetings from '../src/cli.js';
import { getGameResult, getGameRules } from '../src/index.js';

const name = greetings();
getGameRules('brain-even');
getGameResult(brainEvenGame(), name);
