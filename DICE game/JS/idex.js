var randomvar1 = Math.floor((Math.random() * 6 +1));
var randomvar2 = Math.floor((Math.random() * 6 +1));

//CAN BE DONE USING CONCATINATION...
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//OR by if and function..


function a(randomvar){

if(randomvar == 1){
  var x = 'images/dice1.png';
}else if(randomvar == 2){
  x = 'images/dice2.png';
}else if(randomvar == 3){
  x = 'images/dice3.png';
}else if(randomvar == 4){
  x = 'images/dice4.png';
}else if(randomvar == 5){
  x = 'images/dice5.png';
}else if(randomvar == 6){
  x = 'images/dice6.png';
}else{}

return x;

}

var x= a(randomvar1);
var y = a(randomvar2);


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", x);

document.querySelectorAll("img")[1].setAttribute("src", y);


if(randomvar1>randomvar2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(randomvar1<randomvar2){
  document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
