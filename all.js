var location1=3;
var location2=4;
var location3=5;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;

while(isSunk==false){
  guess=prompt("準備，攻擊!!(請輸入0~6)");
  if(guess<0 || guess>6){
    alert('請輸入0~6數字');
  }else{
    guesses=guesses+1;
  
  if(guess==location1 ||guess==location==2 ||guess==location3){
    alert('擊中目標!!');
    hits=hits+1;
    if(hits==3){
      isSunk=true;
      alert('你擊敗全部戰艦');
    }
  }else{
    alert('未打中!!');
  }
  }
}

var stats="你猜了"+guesses+"次擊敗戰艦!"+"意味著你的猜測精準度為"+(3/guesses);
alert(stats);