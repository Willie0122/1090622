var elbody=document.querySelector('.body');
elbody.addEventListener('click',function(e){
    e.preventDefault();
    //取消元素的默認行為
    //原本點連結會跳轉到指定網頁
    alert('body');
    console.log('body');
},false);