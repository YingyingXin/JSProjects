
let randomNum1 = Math.floor(Math.random() * 6 + 1);
document.querySelector('.img1').src = "images/dice" + randomNum1 + ".png";

let randomNum2 = Math.floor(Math.random() * 6 + 1);
document.querySelector('.img2').src = "images/dice" + randomNum2 + ".png";


let title = document.querySelector('h1');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
console.log(img1);
if(randomNum1 > randomNum2){
    title.innerHTML = "Player 1 Wins!"
    img1.classList.add('win');
} else if(randomNum1 < randomNum2){
    title.innerHTML = "Player 2 Wins!"
    img2.classList.add('win');
} else {
    title.innerHTML = "Draw!"
}