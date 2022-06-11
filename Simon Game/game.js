
let gamePatterns = [];
let userPatterns = []

let btnColors = ["green", "red", "yellow", "blue"];

let level = 0

let restart = true



$(window).on('keypress',()=>{
    if(restart){        
        nextSequence();
    }
});

$('.btn').on('click', (event)=>{
    let color = event.target.id;
    userPatterns.push(color);
    pressBtn(color);

    if(!checkAnswer()){
        gameOver();       
    }

})

function gameOver(){
    $('body').addClass('game-over');
    playSound("wrong");
    setTimeout(()=>$('body').removeClass('game-over'), 200);
    $('h1').html("Game OVer! Press any key to restart");
    restart = true;
    gamePatterns = [];
    userPatterns = [];
}
function nextSequence(){   
    level++;
    $('h1').html("Level " + level);
    restart = false;
    userPatterns = [];
    setTimeout(randomColor, 1000)
}


function randomColor(){
    let randomNum = Math.floor(Math.random() * 4); // generate number in [0, 3] inclusive
    let color = btnColors[randomNum];
    gamePatterns.push(color);
  
    animation(color)
}

function checkAnswer(){
    for(let i=0; i<userPatterns.length; i++){
        if(userPatterns[i] != gamePatterns[i]){
            return false;
        }
        if(i == gamePatterns.length-1){
            nextSequence();
        }
    }
    return true;
}

function animation(color){
    let id = "#" + color;
    $(id).fadeOut(100).fadeIn(100);
    playSound(color)  
}

function pressBtn(color){
    $('#'+color).addClass('pressed');
    setTimeout(()=>$('#'+color).removeClass('pressed'), 100);
    playSound(color)
}

function playSound(color){
    let audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}






