#!/usr/bin/env node

import brainProgressionGame from '../games/game-brain-progression.js';
import greetings from '../src/cli.js';
import { getGameResult, getGameRules } from '../src/index.js';

const name = greetings();
getGameRules('brain-progression');
getGameResult(brainProgressionGame(), name);
