#!usr/bin/env node
import process from 'process';
import {getArgs} from './helpers/args.js';
import {printErr, printSuccess, printHelp, printWeather} from './services/log.service.js';
import {saveKeyValue, getKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js'
import {getWeather, getIcon} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printErr('No token yet')
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token was saved');
    } catch (e) {
        printErr('Token doest saved', e.message);
    }
}

const saveCity = async (city) => {
    if(!city.length){
        printErr('No city yet');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('City was saved');
    } catch (e) {
        printErr('City doest saved', e.message);
    }
}

const getForecast = async () => {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    }
        // проверка на ошибки со строны openweather
    catch (e) {
        if (e?.response?.status === 404) {
            printErr('Incorrect city.')
        } else if (e?.response?.status === 401) {
            printErr('Incorrect token.')
        } else {
            printErr(e.message);
        }
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        //display help. -h <-- argument
        return printHelp();
    }
    if (args.s) {
        //city save. -s <-- argument
        return saveCity(args.s);
    }
    if (args.t) {
        //save token. -t <-- save token argument
        return saveToken(args.t);
    }
    return getForecast();


};

initCLI();