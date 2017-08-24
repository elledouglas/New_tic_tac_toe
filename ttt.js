document.addEventListener('DOMContentLoaded', function (){

var player1_turn = true



var square1 = document.querySelector('.one');
square1.addEventListener("click", function(){
  if (square1.style.background === ""){
    if (player1_turn){
    square1.style.background = "pink";
    player1_turn = false
  }else {
    square1.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square2 = document.querySelector('.two');
square2.addEventListener("click", function(){
  if (square2.style.background === ""){
  if (player1_turn){
    square2.style.background = "pink";
    player1_turn = false
  }else {
    square2.style.background = "white";
    player1_turn = true

  }
  check();
}
});


var square3 = document.querySelector('.three');
square3.addEventListener("click", function(){
  if (square3.style.background === ""){
  if (player1_turn){
    square3.style.background = "pink";
    player1_turn = false
  }else {
    square3.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square4 = document.querySelector('.four');
square4.addEventListener("click", function(){
  if (square4.style.background === ""){
  if (player1_turn){
    square4.style.background = "pink";
    player1_turn = false
  }else {
    square4.style.background = "white";
    player1_turn = true
  }
  check();
}
});

var square5 = document.querySelector('.five');
square5.addEventListener("click", function(){
  if (square5.style.background === ""){
  if (player1_turn){

    square5.style.background = "pink";
    player1_turn = false
  }else {
    square5.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square6 = document.querySelector('.six');
square6.addEventListener("click", function(){
  if (square6.style.background === ""){
  if (player1_turn){
    square6.style.background = "pink";
    player1_turn = false
  }else {
    square6.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square7 = document.querySelector('.seven');
square7.addEventListener("click", function(){
  if (square7.style.background === ""){
  if (player1_turn){
    square7.style.background = "pink";
    player1_turn = false
  }else {
    square7.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square8 = document.querySelector('.eight');
square8.addEventListener("click", function(){
  if (square8.style.background === ""){
  if (player1_turn){
    square8.style.background = "pink";
    player1_turn = false
  }else {
    square8.style.background = "white";
    player1_turn = true
  }
  check();
}
});


var square9 = document.querySelector('.nine');
square9.addEventListener("click", function(){
  if (square9.style.background === ""){
  if (player1_turn){
    square9.style.background = "pink";
    player1_turn = false
  }else {
    square9.style.background = "white";
    player1_turn = true
  }
  check();
}
});


function check(){

 if ((square1.style.background !== "")&&(square1.style.background === square2.style.background) && (square2.style.background === square3.style.background)){
   if (square1.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square4.style.background !== "")&&(square4.style.background === square5.style.background) && (square5.style.background === square6.style.background)){
   if (square4.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square7.style.background !== "")&&(square7.style.background === square8.style.background) && (square8.style.background === square9.style.background)){
   if (square7.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square1.style.background !== "")&&(square1.style.background === square4.style.background) && (square4.style.background === square7.style.background)){
   if (square1.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square2.style.background !== "")&&(square2.style.background === square5.style.background) && (square5.style.background === square8.style.background)){
   if (square2.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square3.style.background !== "")&&(square3.style.background === square6.style.background) && (square6.style.background === square9.style.background)){
   if (square3.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square1.style.background !== "")&&(square1.style.background === square5.style.background) && (square5.style.background === square9.style.background)){
   if (square1.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }else if((square3.style.background !== "")&&(square3.style.background === square5.style.background) && (square5.style.background === square7.style.background)){
   if (square1.style.background === 'pink'){
     alert('hey!!! Player 1 wins')
   }else {
     alert('Hey!!! Player 2 Wins')
   }
 }

}






});
