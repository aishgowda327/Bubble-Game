
var timer = 60;
var score = 0;
var hitin = 0;
function makeBubble(){
    var clutter = "";
    for (var i=1;i<=160;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class=bubble>${rn}</div>`
    }
    document.querySelector("#btp").innerHTML = clutter
}

function runtimer(){
 var timerint = setInterval(() => {
    if(timer> 0){
       
        timer--;
        document.querySelector("#timerval").textContent = timer
    }
    else {
        clearInterval(timerint)
        document.querySelector("#btp").innerHTML = `<img src="game-over.png">`
    }
}, 1000);
}

function hit(){
    hitin = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitin
}


function incscore(){
    score +=10
    document.querySelector("#scoreval").textContent = score
}

   document.querySelector("#btp").addEventListener("click",function(dets){
    clicked = Number(dets.target.textContent);
    if(clicked === hitin){
            incscore();
            makeBubble();
            hit();
        }

    })




makeBubble();
runtimer();
hit();