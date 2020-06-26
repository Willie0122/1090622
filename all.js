var table=document.querySelector('.table');
var content=document.querySelector('.content');

table.addEventListener('change',CL,false);

function CL(e){
    mo=e.target.value;
    if(mo=="中壢區"){
        content.innerHTML="中壢區為臺灣桃園市13區之一。中壢區位於全市平地的中心位置，由北開始順時針依序與大園區、蘆竹區、桃園區、八德區、平鎮區、楊梅區、新屋區、觀音區共8區接壤，鄰接行政區的數量為全市之最。 中壢區面積約為76.5km²，全區大致可以分成中壢、內壢、龍岡、大崙四個次分區，並以前三者為主要的市區和人口集中區域。";
    }
    else if (mo=="桃園區") {
        content.innerHTML='<h2>桃園區是臺灣桃園市13區之一，為桃園市政府所在地。桃園區位於全市中央偏東北的位置，西鄰中壢區，北鄰蘆竹區，東鄰龜山區，南鄰八德區，東南鄰新北市鶯歌區。</h2>';

    } else if (mo=="龍潭區") {
        console.log('113');
    } else {
        console.log('1552');
    }
}