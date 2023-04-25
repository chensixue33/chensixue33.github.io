let bgcolor=['aqua','antiquewhite','blueviolet','brown'];
window.onload=function(){
    var ul=document.getElementById('ul_box');
    bgcolor.forEach(element=>{
        var li=document.createElement("li");
        li.onclick=function(event){
            document.body.style.backgroundColor=event.target.style.backgroundColor;
        };
        li.style.backgroundColor=element;
        ul.appendChild(li);
    })
}
