#!usr/bin/env node
import process from 'node:process';
import { getArgs } from './helpers/args.js';
import {printErr, printSuccess, printHelp} from './services/log.service.js';


const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h){
    //display help
    printHelp();
  }
  if (args.s){
    //city save
  }
  if(args.t){
    //save token
  }
  else {
    // weather output
  }
};

initCLI();