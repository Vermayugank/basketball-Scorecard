let hCount=1000;
let gCount=1000;
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