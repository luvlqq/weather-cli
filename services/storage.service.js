import os from 'os';
import path from "path";
import fs from "fs";

// нельзя конкатенировать пути, лучше использовать бибилиотеку path, потому что мы теряем чать пути
const filePath = path.join(os.homedir(), 'weather-data.json')

const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath);
        data = JSON.parse(file);
    }
    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await fs.promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    }
    return undefined;
};

const isExist = async (isExistPath) => {
    try{
        await fs.promises.stat(isExistPath);
        return true;
    }catch (e) {
        return false;
    }

}

export { saveKeyValue, getKeyValue }