const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);

  if (min < 10 && sec < 10) {
    console.log(chalk.cyan(figlet.textSync(`0${min} : 0${sec}`)));
  } else if (min < 10 && sec > 10) {
    console.log(chalk.cyan(figlet.textSync(`0${min} : ${sec}`)));
  } else if (min > 10 && sec < 10) {
    console.log(chalk.cyan(figlet.textSync(`${min} : 0${sec}`)));
  } else if (min > 10 && sec > 10) {
    console.log(chalk.cyan(figlet.textSync(`${min} : ${sec}`)));
  }
};

module.exports = { displayCountdown };
