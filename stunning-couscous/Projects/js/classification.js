var dateList=[];
var genresList=[];
window.onload=function(){
    var url="./db/json/movies-coming-soon.json"
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.send(null);
    request.onload=function(){
        var movieList=JSON.parse(request.responseText);
        var content_box=document.getElementById("content_box");
        movieList.forEach(element => {
            var bl_date=true;
            var now_genres=element.genres;
            dateList.forEach(data=>{
                if(element.year==data){
                    bl_date=false;
                }
            });
            now_genres.forEach(genre=>{
                var bl_genre=true;
                var count=1;
                genresList.forEach(nowg=>{
                    if(genre==nowg.name){
                        bl_genre=false;
                        nowg.count=(nowg.count*1)+1;

                    }
                });
                if(bl_genre){
                    genresList.push({name:genre,count:count})
                }
            })
            if(bl_date){
                dateList.push(element.year);
            }

            var column=document.createElement("div");
            column.classList="cloumn";

            var title_p=document.createElement("p");
            title_p.innerHTML=element.title;
            var releaseDate_p=document.createElement("p");
            releaseDate_p.innerHTML=element.releaseDate;
            var genres_p=document.createElement("p");
            genres_p.innerHTML=element.genres;
            var img_p=document.createElement("p");
            var img=document.createElement("img");
            img.src="./img/"+element.poster;
            img.id=element.id;
            img.onclick=openDetail;
            img_p.appendChild(img);

            column.appendChild(title_p);
            column.appendChild(releaseDate_p);
            column.appendChild(genres_p);
            column.appendChild(img_p);
            content_box.appendChild(column);
        });
        // console.log(genresList);
        //console.log(dateList);
        var date=document.getElementById("date");
        dateList.forEach(now_date=>{
            var button=document.createElement("button");
            button.innerHTML=now_date;
            button.name="date";
            button.onclick=choose;
            date.appendChild(button);
        })
        
        var genres=document.getElementById("genres");
        genresList.forEach(now_genre=>{
            var button=document.createElement("button");
            button.innerHTML=now_genre.name;
            button.name="genres";
            button.onclick=choose;
            genres.appendChild(button);
        });

        
    }
}

function choose(){
    if(event.target.name=="date"){
        var date=event.target.innerHTML;
        var url="./db/json/movies-coming-soon.json"
        var request=new XMLHttpRequest();
        request.open("get",url);
        request.send(null);
        request.onload=function(){
            var movieList=JSON.parse(request.responseText);
            var content_box=document.getElementById("content_box");
            content_box.innerHTML="";
            movieList.forEach(element => {
                if(element.year== date){
                    var column=document.createElement("div");
                    column.classList="cloumn";

                    var title_p=document.createElement("p");
                    title_p.innerHTML=element.title;
                    var releaseDate_p=document.createElement("p");
                    releaseDate_p.innerHTML=element.releaseDate;
                    var genres_p=document.createElement("p");
                    genres_p.innerHTML=element.genres;
                    var img_p=document.createElement("p");
                    var img=document.createElement("img");
                    img.src="./img/"+element.poster;
                    img.id=element.id;
                    img.onclick=openDetail;
                    img_p.appendChild(img);

                    column.appendChild(title_p);
                    column.appendChild(releaseDate_p);
                    column.appendChild(genres_p);
                    column.appendChild(img_p);
                    content_box.appendChild(column);
                }
            });
        }
    }else if(event.target.name=="genres"){
        var genre=event.target.innerHTML;
        var url="./db/json/movies-coming-soon.json"
        var request=new XMLHttpRequest();
        request.open("get",url);
        request.send(null);
        request.onload=function(){
            var movieList=JSON.parse(request.responseText);
            var content_box=document.getElementById("content_box");
            content_box.innerHTML="";
            movieList.forEach(element => {
                var now_genres=element.genres;
                var bl=false;
                now_genres.forEach(gs=>{
                    if(gs==genre){
                        bl=true;
                    }
                });
                if(bl){
                    var column=document.createElement("div");
                    column.classList="cloumn";

                    var title_p=document.createElement("p");
                    title_p.innerHTML=element.title;
                    var releaseDate_p=document.createElement("p");
                    releaseDate_p.innerHTML=element.releaseDate;
                    var genres_p=document.createElement("p");
                    genres_p.innerHTML=element.genres;
                    var img_p=document.createElement("p");
                    var img=document.createElement("img");
                    img.src="./img/"+element.poster;
                    img.id=element.id;
                    img.onclick=openDetail;
                    img_p.appendChild(img);

                    column.appendChild(title_p);
                    column.appendChild(releaseDate_p);
                    column.appendChild(genres_p);
                    column.appendChild(img_p);
                    content_box.appendChild(column);
                }
            });
        }
    }
}

