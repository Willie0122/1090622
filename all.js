var xhr=new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xhr.send('email=ss3751@gmail.com&password="1234');


xhr.onload=function(){
    console.log('111');
    var str=JSON.parse(xhr.responseText);
    console.log(str.message)
     if(str.message=='此帳號已被使用'){
       var momo=document.querySelector('.result');
       momo.innerHTML="此帳號已被使用";
    }

}
