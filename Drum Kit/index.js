
let btns = document.querySelectorAll(".drum");

function playAudio(src){
    let audio = new Audio(src);
    audio.play();
}

function playDiffAudios(content){
    switch (content){
        case 'w':
            playAudio('sounds/crash.mp3');
            break;
        case 'a':
            playAudio('sounds/kick-bass.mp3');
            break;
        case 's':
            playAudio('sounds/snare.mp3');
            break;
        case 'd':
            playAudio('sounds/tom-1.mp3');
            break;  
        case 'j':
            playAudio('sounds/tom-2.mp3');
            break;
        case 'k':
            playAudio('sounds/tom-3.mp3');
            break;
        case 'l':
            playAudio('sounds/tom-4.mp3');
            break;
        default:
            break;
    }     
}
btns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        playDiffAudios(btn.innerHTML);
        btnAnimation(btn.innerHTML);                      
    });
});

document.addEventListener("keypress", (event)=>{
    playDiffAudios(event.key);  
    btnAnimation(event.key);        
})

function btnAnimation(key){
    let btn = document.querySelector('.' + key);
    btn.classList.add('pressed');
    setTimeout(()=>btn.classList.remove('pressed'), 100);
    
}

// JQuery
// 1. add Jquery library as a script before index.cs
// 2. change css:
$('h1').css('color', 'red');
// 3. change html
$('h1').html('Hello, Click Me');
// 4. change attribute
$('a').attr('href', 'https://yingyingxin.github.io/My_CV/');
// 5. addEventListener
$('h1').click(()=>{
    $('h1').css('color', '#DBEDF3');
    $('h1').html('Drum 🥁 Kit');
})
// 6. on API
$('a').on("mouseover", ()=>{
    $('a').css("font-size", '2em');
})
$('a').on("mouseout", ()=>{
    $('a').css("font-size", '1em');
})
// 7. add and remove
// before, after, append, remove

// 8. animation
$('.toggle').on('click', ()=>{
    $('footer').slideToggle();
});
$('footer').on('mouseover', ()=>{
    $('footer').animate({
        margin : 10,
        opacity : 1
    });
})
$('footer').on('mouseout', ()=>{
    $('footer').animate({
        margin : 0,
        opacity : 0.5
    });
})