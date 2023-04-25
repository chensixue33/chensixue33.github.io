let nouns=['heart','rainbow','ocean'];
let adjectives=["happy", "sad", "panic", "happy", "lost", "confused"];
let verbs=["walk", "run", "have", "see", "fly", "fall"];
window.onload=function(){
    let age=25;
    let height=5;
    console.log("Your current age is:"+age);
    console.log("Your current height is:"+height);
    if(age<8){
        console.log("Check out the Merry-Go-Round. You'll love it!");
    }else if(age>8 && age<65 && height>4.5){
        console.log("Check out the Roller Coaster. It's awesome!");
    }else{
        console.log('Why not enjoy a float down the Lazy River?');
    }
    random();
}

function random(){
    var generator=document.getElementById("generator");
    var verb=verbs[Math.floor(Math.random()*verbs.length)];
    var adjective=adjectives[Math.floor(Math.random()*adjectives.length)];
    var noun=nouns[Math.floor(Math.random()*nouns.length)];
    generator.innerHTML=`My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`;
}

