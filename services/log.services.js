import chalk from "chalk";
import dedent from "dedent-js"; // bu codelarni orasidagi tab larni consoleda olib tashlashdi.

const printError = (error) => {
    console.log(chalk.bgRed("ERROR :")  + '' + error);
}
const printSuccess = (message) => {
    console.log(chalk.bgBlue("Success: ") + ' ' + message);
}
const printHelp = () => {
console.log(`
${chalk.bgYellow.bold('HELP')}
    -s [CITY] for define city
    -h for help
    -t [API_KEY] for saving token
    `)
}

export {printError,printSuccess,printHelp}