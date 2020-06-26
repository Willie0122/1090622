var ham=document.getElementById('hamID');
var fri=document.getElementById('friID');
ham.addEventListener('blur',hamfun,false);
fri.addEventListener('blur',frifun,false);

function hamfun(e){
    el=e.target.value;
    if(el==''){
        alert('此處不可為空。')
    }
}

function frifun(e){
    el=e.target.value;
    if(el==''){
        alert('此處不可為空。')
    }
}


var sum=document.querySelector('.momo');
sum.onclick=function(){
    var hamSUM=document.querySelector('#hamID').value;
    var friSUM=document.querySelector('#friID').value;
    var sum1=parseInt(hamSUM)+parseInt(friSUM);
    document.querySelector('.nono').textContent=sum1;
}

