var el = document.querySelector('#select');
var ul = document.querySelector('.list');

var Group = [{
    Name: 'AOAO',
    Age: '中壢區'
},
{
    Name: 'BOBO',
    Age: '20'
},
{
    Name: 'COCO',
    Age: '中壢區'
}];

var len=Group.length;
var str='';

function updatelist(e){
    var select=e.target.value;
    for(i=0;i<len;i++){
        if(select==Group[i].Age){
            str+='<li>'+Group[i].Name+'</li>';
        }
    }
    ul.innerHTML=str;
}
el.addEventListener('change',updatelist,false);
