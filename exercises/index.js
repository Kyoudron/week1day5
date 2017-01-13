var chalk = require("chalk");

var message = chalk.bgRed("Hello ") + chalk.bgGreen("World") + chalk.magenta(" and ") + chalk.underline.bgYellow("YOU.");
console.log(message);
