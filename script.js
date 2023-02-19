let hCount=0;
let gCount=0;
let hCEl=document.getElementById("count-h");
let gCEl=document.getElementById("count-g");
function add1_h(){
  hCount+=1;
  hCEl.innerHTML = hCount;
  console.log(hCount);
}
function add2_h(){
  hCount+=2;
  hCEl.innerHTML=hCount;
}
function add3_h(){
  hCount+=3;
  hCEl.innerHTML=hCount;
}

function add1_g(){
  gCount+=1;
  gCEl.innerHTML=gCount;
}
function add2_g(){
  gCount+=2;
  gCEl.innerHTML=gCount;
}
function add3_g(){
  gCount+=3;
  gCEl.innerHTML=gCount;
}
function reset() {
  console.log("click reset");
  hCount = 0;
  gCount = 0;
  hCEl.innerHTML = hCount;
  gCEl.innerHTML = gCount;
}
