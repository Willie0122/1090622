var el=document.querySelector('.box');
el.addEventListener('click',function(e){e.stopPropagation();
    alert('box');
    console.log('box')
},false);

var elbody=document.querySelector('.body');
elbody.addEventListener('click',function(){
    alert('body');
    console.log('body');
},false);