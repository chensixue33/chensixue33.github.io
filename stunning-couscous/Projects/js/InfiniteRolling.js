var olist = document.getElementById("list1");  
var olist2 = document.getElementById("list2");  
var olist3 = document.getElementById("list3");  
var olist4 = document.getElementById("list4");  
var olist5 = document.getElementById("list5");  
var olist6 = document.getElementById("list6");  
var olist7 = document.getElementById("list7");  
var olist8 = document.getElementById("list8");  
var olist9 = document.getElementById("list9");  
var olist10 = document.getElementById("list10");  

var liArr = document.querySelectorAll('#list1>li');
var liArr2 = document.querySelectorAll('#list2>li');
var liArr3 = document.querySelectorAll('#list3>li');
var liArr4 = document.querySelectorAll('#list4>li');
var liArr5 = document.querySelectorAll('#list5>li');
var liArr6 = document.querySelectorAll('#list6>li');
var liArr7 = document.querySelectorAll('#list7>li');
var liArr8 = document.querySelectorAll('#list8>li');
var liArr9 = document.querySelectorAll('#list9>li');
var liArr10 = document.querySelectorAll('#list10>li');

var newLiNode,newLiNode2,newLiNode3,newLiNode3,newLiNode3,newLiNode3,newLiNode4,newLiNode5,newLiNode6,newLiNode7,newLiNode8,newLiNode9,newLiNode10 = null;
for(var i = 0; i<liArr.length;i++){
    newLiNode = liArr[i].cloneNode(true);
    olist.appendChild(newLiNode);
}

for(var i = 0; i<liArr2.length;i++){
    newLiNode2 = liArr2[i].cloneNode(true);
    olist2.appendChild(newLiNode2)
}

for(var i = 0; i<liArr3.length;i++){
    newLiNode3 = liArr3[i].cloneNode(true);
    olist3.appendChild(newLiNode3)
}

for(var i = 0; i<liArr4.length;i++){
    
    newLiNode4 = liArr4[i].cloneNode(true);

    olist4.appendChild(newLiNode4)
}

for(var i = 0; i<liArr5.length;i++){
    
    newLiNode5 = liArr5[i].cloneNode(true);

    olist5.appendChild(newLiNode5)
}

for(var i = 0; i<liArr6.length;i++){
    
    newLiNode6 = liArr3[i].cloneNode(true);

    olist6.appendChild(newLiNode6)
}

for(var i = 0; i<liArr7.length;i++){
    
    newLiNode7 = liArr7[i].cloneNode(true);

    olist7.appendChild(newLiNode7)
}

for(var i = 0; i<liArr8.length;i++){
    
    newLiNode8 = liArr8[i].cloneNode(true);

    olist8.appendChild(newLiNode8)
}

for(var i = 0; i<liArr9.length;i++){
    
    newLiNode9 = liArr9[i].cloneNode(true);

    olist9.appendChild(newLiNode9)
}

for(var i = 0; i<liArr10.length;i++){
    
    newLiNode10 = liArr10[i].cloneNode(true);

    olist10.appendChild(newLiNode10)
}



var timer,timer2,timer3,timer4 ,timer5 ,timer6 ,timer7 ,timer8 ,timer9 ,timer10  = null;
var moveLeft=0;
var moveLeft2=0;
var moveLeft3=0;
var moveLeft4=0;
var moveLeft5=0;
var moveLeft6=0;
var moveLeft7=0;
var moveLeft8=0;
var moveLeft9=0;
var moveLeft10=0;

function move(){
    timer = setInterval(function(){
        if(moveLeft === -2200){
            moveLeft = 0;
        }
        moveLeft -= 5;
        olist.style.left = moveLeft+"px";
    },20)
}

function move2(){
    timer2 = setInterval(function(){
        if(moveLeft2 === -2200){
            moveLeft2 = 0;
        }
        moveLeft2 -= 5;
        olist2.style.left = moveLeft2+"px";
    },20)
}


function move3(){
    timer3 = setInterval(function(){
        if(moveLeft3 === -2200){
            moveLeft3 = 0;
        }
        moveLeft3 -= 5;
        olist3.style.left = moveLeft3+"px";
    },20)
}

function move4(){
    timer4 = setInterval(function(){
        if(moveLeft4 === -2200){
            moveLeft4 = 0;
        }
        moveLeft4 -= 5;
        olist4.style.left = moveLeft4+"px";
    },20)
}

function move5(){
    timer5 = setInterval(function(){
        if(moveLeft5 === -2200){
            moveLeft5 = 0;
        }
        moveLeft5 -= 5;
        olist5.style.left = moveLeft5+"px";
    },20)
}

function move6(){
    timer6 = setInterval(function(){
        if(moveLeft6 === -2200){
            moveLeft6 = 0;
        }
        moveLeft6 -= 5;
        olist6.style.left = moveLeft6+"px";
    },20)
}

function move7(){
    timer7 = setInterval(function(){
        if(moveLeft7 === -2200){
            moveLeft7 = 0;
        }
        moveLeft7 -= 5;
        olist7.style.left = moveLeft7+"px";
    },20)
}

function move8(){
    timer8 = setInterval(function(){
        if(moveLeft8 === -2200){
            moveLeft8 = 0;
        }
        moveLeft8 -= 5;
        olist8.style.left = moveLeft8+"px";
    },20)
}

function move9(){
    timer9 = setInterval(function(){
        if(moveLeft9 === -2200){
            moveLeft9 = 0;
        }
        moveLeft9 -= 5;
        olist9.style.left = moveLeft9+"px";
    },20)
}

function move10(){
    timer10 = setInterval(function(){
        if(moveLeft10 === -2200){
            moveLeft10 = 0;
        }
        moveLeft10 -= 5;
        olist10.style.left = moveLeft10+"px";
    },20)
}

       
olist.onmouseenter = function(){
    clearInterval(timer);
}; 
olist.onmouseleave = function(){
    move();
}

olist2.onmouseenter = function(){
    clearInterval(timer2);
}; 
olist2.onmouseleave = function(){
    move2();
}


olist3.onmouseenter = function(){
    clearInterval(timer3);
}; 
olist3.onmouseleave = function(){
    move3();
}

olist4.onmouseenter = function(){
    clearInterval(timer4);
}; 
olist4.onmouseleave = function(){
    move4();
}

olist5.onmouseenter = function(){
    clearInterval(timer5);
}; 
olist5.onmouseleave = function(){
    move5();
}

olist6.onmouseenter = function(){
    clearInterval(timer6);
}; 
olist6.onmouseleave = function(){
    move6();
}

olist7.onmouseenter = function(){
    clearInterval(timer7);
}; 
olist7.onmouseleave = function(){
    move7();
}

olist8.onmouseenter = function(){
    clearInterval(timer8);
}; 
olist8.onmouseleave = function(){
    move8();
}

olist9.onmouseenter = function(){
    clearInterval(timer9);
}; 
olist9.onmouseleave = function(){
    move9();
}

olist10.onmouseenter = function(){
    clearInterval(timer10);
}; 
olist10.onmouseleave = function(){
    move10();
}