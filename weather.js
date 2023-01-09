#!usr/bin/env node
import process from 'node:process';
import { getArgs } from './helpers/args.js';


const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
};

initCLI();