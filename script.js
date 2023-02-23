let hCount = 0;
let gCount = 0;
let hCEl = document.getElementById("count-h");
let gCEl = document.getElementById("count-g");
let timerEl_min = document.getElementById("timer-el min");
let timerEl = document.getElementById("timer-el")
let timerEl_sec = document.getElementById("timer-el secs")
function add1_h() {
  hCount += 1;
  hCEl.innerHTML = hCount;
  console.log(hCount);
}
function add2_h() {
  hCount += 2;
  hCEl.innerHTML = hCount;
}
function add3_h() {
  hCount += 3;
  hCEl.innerHTML = hCount;
}
function add1_g() {
  gCount += 1;
  gCEl.innerHTML = gCount;
}
function add2_g() {
  gCount += 2;
  gCEl.innerHTML = gCount;
}
function add3_g() {
  gCount += 3;
  gCEl.innerHTML = gCount;
}
function reset() {
  console.log("click reset");
  hCount = 0;
  gCount = 0;
  hCEl.innerHTML = hCount;
  gCEl.innerHTML = gCount;
}
function start() {
  let time = prompt("Enter time in minutes");
  if (time <= 0) return alert("Invalid input!");
  myTimer = setInterval(myClock, 1000);
  var c = time * 60; //Initially set to 1 hour
  function myClock() {
    --c
    var seconds = c % 60; // Seconds that cannot be written in minutes
    var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
    var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
    var hours = (secondsInMinutes - minutes) / 60;
    // Now in hours, minutes and seconds, you have the time you need.
    // if (minutes < 10) {
    //   if (seconds < 10) timerEl.textContent = "0" + minutes + ":0" + seconds;
    //   else timerEl.textContent = "0" + minutes + ":" + seconds;
    // }
    // else timerEl.textContent = minutes + ":" + seconds;
    if(minutes<10) timerEl_min.textContent="0"+minutes;
    else timerEl_min.textContent=minutes;
    if (seconds<10) timerEl_sec.textContent="0"+seconds;
    else timerEl_sec.textContent=seconds;
    console.log(hours + ":" + minutes + ":" + seconds)
    if (c == 0) {
      clearInterval(myTimer);
    }
  }
}
