const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    //displayCountdown(seconds - 1);
    let stopTimer = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < -1) {
        clearInterval(stopTimer);
        var clear = require('clear')
        clear()
        resolve();
      } else {
        let menit = Math.floor(seconds/60);
        let detik = seconds % 60;
        seconds--
        if(menit < 10 && detik < 10){
          displayCountdown(`0${menit} : 0${detik}`);
        }else if(menit < 10 && detik > 10){
          displayCountdown(`0${menit} : ${detik}`);
        }else if(menit > 10 && detik > 10){
          displayCountdown(`${menit} : ${detik}`);
        }else if(menit > 10 && detik < 10){
          displayCountdown(`${menit} : 0${detik}`);
        }else if(menit === 10){
          displayCountdown(`${menit} : 0${detik}`);
        }else if(menit < 10){
          displayCountdown(`0${menit} : ${detik}`);
        }else if(detik < 10){
          displayCountdown(`${menit} : ${detik}`);
        }else{
          displayCountdown(`${menit} : ${detik-1}`);
        }
        // if(seconds < -1){
        //   //displayCountdown(`0${menit} : 0${detik}`);
        //   clearInterval(stopTimer);
        //   var clear = require('clear')
        //   clear()
        // }    
      }
    }, 1000);
  });

module.exports = {
  timer
};
