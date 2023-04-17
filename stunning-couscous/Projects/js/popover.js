 
 var _box=document.getElementById("box");
 var _btn=document.getElementById("btn");
 var _close=document.getElementById("close");
 var _dialog=document.getElementById("dialog");

function openDetail(){
    var id=event.explicitOriginalTarget.id;
    var url="./db/json/movies-coming-soon.json"
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload=function(){
        var movieList=JSON.parse(request.responseText);
        movieList.forEach((element) => {
            if(element.id==id){
                var movie_image=document.getElementById("movie_image");
                var movie_title=document.getElementById("movie_title");
                var movie_releaseDate=document.getElementById("movie_releaseDate");
                var movie_storyline=document.getElementById("movie_storyline");
                var movie_genres=document.getElementById("movie_genres");
                var movie_actors=document.getElementById("movie_actors");     
                movie_image.src="./img/"+element.poster;
                movie_title.innerHTML=element.title;
                movie_releaseDate.innerHTML=element.releaseDate;
                movie_storyline.innerHTML=element.storyline;
                movie_genres.innerHTML=element.genres;
                movie_actors.innerHTML=element.actors;
                
                var header = document.getElementById('header');
                console.log(header.offsetTop);
                dialog.setAttribute("style","height:"+document.body.scrollHeight+"px");
                _box.setAttribute("style","top:60px;")
                window.scrollTo(0,header.offsetTop);
                 _dialog.style.opacity="1";
                 _dialog.style.zIndex="3";
                 _dialog.style.display="flex";
            }
        });
    }
}

 _close.onclick=function(){
     _dialog.style.opacity="0";
     _dialog.style.zIndex="1";
     _dialog.style.display="none";
}