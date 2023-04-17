window.onload=function(){
    move();
    move2();
    move3();
    move4();
    move5();
    move6();
    move7();
    move8();
    move9();
    move10();
    var url="../db/json/movies-coming-soon.json"
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload=function(){
        var movieList=JSON.parse(request.responseText);
        movieList.forEach((element,index) => {
        });
        if(movieList.length>0){
            for(var i=0;i<10;i++){
               var now_list=document.getElementById("list"+(i+1));
               if(i!=9){
                for(var j=Math.round(movieList.length/10)*i;j<Math.round(movieList.length/10)*(i+1);j++){
                    var movieSection=document.createElement("li");
                    var img=document.createElement("img");
                    img.id=movieList[j].id;
                    img.src="./img/"+movieList[j].poster;
                    img.onclick=openDetail;
                    movieSection.appendChild(img);
                    now_list.appendChild(movieSection);
                }   
               }else{
                for(var j=Math.round(movieList.length/10)*i;j<movieList.length;j++){
                    var movieSection=document.createElement("li");
                    var img=document.createElement("img");
                    img.id=movieList[j].id;
                    img.src="./img/"+movieList[j].poster;
                    img.onclick=openDetail;
                    movieSection.appendChild(img);
                    now_list.appendChild(movieSection);
                }
               }                
            }
        }
    }
}

