#!usr/bin/env node
import process from 'process';
import { getArgs } from './helpers/args.js';
import { printErr, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printErr('No token yet')
    return;
  }
  try{
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token was saved');
  }
  catch (e){
    printErr('Token doest saved', e.message);
  }
}

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h){
    //display help. -h <-- argument
    printHelp();
  }
  if (args.s){
    //city save. -s <-- argument

  }
  if(args.t){
    //save token. -t <-- save token argument
    return saveToken(args.t);
  }
  else {
    getWeather('Minsk');
  }

};

initCLI();