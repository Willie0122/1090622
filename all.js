var el=document.querySelector('.body');
el.addEventListener('mousemove',function(e){
    console.log("screenX="+e.screenX);
    console.log("screenY="+e.screenY);
    console.log("pageX="+e.pageX);
    console.log("pageY="+e.pageY);
    console.log("clientX="+e.clientX);
    console.log("clientY="+e.clientY);  
},false)
