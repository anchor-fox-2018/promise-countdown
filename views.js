const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.red(figlet.textSync(String(seconds))))
};

module.exports = { displayCountdown };
