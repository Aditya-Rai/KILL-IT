alert("Lets Play the game of which PUBG is afraid of");
var player1 = prompt("Enter player 1 name");
var player2 = prompt("Enter player 2 name");
var firstLetterPlayer1 = player1.slice(0, player1.length);
var upperFirstPlayer1 = firstLetterPlayer1.toUpperCase();
player1 = upperFirstPlayer1 
document.querySelector(".p1").innerHTML = player1;



var firstLetterPlayer2 = player2.slice(0, player2.length);
var upperFirstPlayer2 = firstLetterPlayer2.toUpperCase();
player2 = upperFirstPlayer2 
document.querySelector(".p2").innerHTML = player2;


var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);



if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "🙌🙌Hurray " + player1 + "  Wins. Now Read At Bottom";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerHTML = "🎉🎉Hurray " + player2 + " Wins. Now Read At Bottom";
}
else {
    document.querySelector(".winner").innerHTML = "It's a 🤦‍♀️🤦‍♀️TIE try again. Now Read At Bottom";
}