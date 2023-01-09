import chalk from "chalk";
import dedent from "dedent-js";

const printErr = (error) => {
    console.log(chalk.bgRed(' Error ')+ " " + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' Success ' )+ " " + message)
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

export {printErr, printSuccess, printHelp}