#!usr/bin/env node
import process from 'process';
import { getArgs } from './helpers/args.js';
import { printErr, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue, getKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
  try{
    await saveKeyValue('token', token);
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
    // weather output
  }
};

initCLI();