import chalk from "chalk";
import dedent from "dedent-js";

const printErr = (error) => {
    console.log(chalk.bgRed(' Error ')+ " " + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen.black(' Success ' )+ " " + message)
}

const printHelp = () => {
    console.log(
        chalk.bgYellow.bold.black(dedent(
            `HELP
            Without any params <- output weather
            -s [CITY] <-- for install city;
            -h [HELP] <-- help;
            -t [TOKEN] <-- weather API key save.
            `
        ))
    )
}

const printWeather = (res, icon) => {
    console.log(
        dedent(
            `WEATHER. WEATHER IN CITY: ${res.name}
            ${icon} ${res.weather[0].description};
            Temperature: ${res.main.temp};
            Feels like: ${res.main.feels_like};
            Humidity: ${res.main.humidity}%;
            Wind speed: ${res.wind.speed} ;
            `
        )
    )
}

export { printErr, printSuccess, printHelp, printWeather }