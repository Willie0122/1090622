var text = document.querySelector('.NameClass');
var Btn = document.querySelector('.TextClass');
var display=document.querySelector('.DisplayClass');



function btn() {
    var str=text.value;
    localStorage.setItem('KEY-1',str);
}

Btn.addEventListener('click',btn,false);
display.addEventListener('click',function(){
    el=localStorage.getItem('KEY-1');
    alert('你剛輸入的是'+el+'。')
},false);
