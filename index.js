var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = document.querySelector(".img1");
diceImage1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = document.querySelector(".img2");
diceImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");


var titulo = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    titulo.innerHTML = "Player 1 Win 🚩";
} else if (randomNumber1 < randomNumber2){
    titulo.innerHTML = "Player 2 Win 🚩";
} else {
    titulo.innerHTML = "Draw";
}