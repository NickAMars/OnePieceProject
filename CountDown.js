/*
Count down for the episode on the next  page
*/
let countDownDate = new Date("August 11, 2018 00:00:00").getTime();
// document.getElementById("time").innerHTML = `${countDownDate}`;

// const countDownFunction =

const CountDown =  ()=> {
  const now = new Date().getTime();
  let distance = countDownDate - now;


  if(distance < 0){
    /*
    add to the current count seven days until it is greater than now
    */
    while(countDownDate < now){
      countDownDate = countDownDate + 1000*60*60*24*7;

    }
    distance =   countDownDate - now;
  }

/*
 (%)module means remainder
*/
  const days = Math.floor(distance/(1000*60*60*24));
  const hours = Math.floor( (distance%(1000*60*60*24)) / (1000*60*60)); //1 hour == 1000*60*60
  const minutes = Math.floor( (distance%(1000*60*60)) /(1000*60)); // 1 min == 1000*60
  const seconds = Math.floor( (distance%(1000*60)) /(1000));  // 1sec == 1000
  document.getElementById('time').innerHTML =  `${days}D ${hours}H ${minutes}M ${seconds}S`;
}


setInterval(CountDown , 1000); // every second
