"use strict"

var secretnumber = Math.trunc(Math.random()*20)+1;

const number=document.querySelector('.number');


const btnCheck=document.querySelector('.check');
 
const btnAgain=document.querySelector('.again');

const message=document.querySelector('.message');

var score=20;
const displayScore=document.querySelector('.score');
displayScore.textContent=score;

var highScore = 0;
const displayHighScore =document.querySelector('.highScore');
displayHighScore.textContent=highScore;

btnCheck.addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').Value);
  if(score > 0){
    if (guess>0 && guess <= 20){
      
  if (guess === secretnumber){
      message.textContent = 'you are correct you won'
      document.body.style.background ='green';
      number.textContent = secretnumber;
      number.style.width = '30rem';

      if (score > highScore){
        highScore = score;
        displayHighScore.textContent = highScore;
      }
      } else if (guess > secretnumber){
        message.textContent='you selected high number';
        score--;
        displayScore.textContent = score;
      } else if (guess < secretnumber){
        message.textContent ='you selected low number ';
        score --;
        displayScore.textContent = score ;
      }
    } else {
      message.textContent='provide right input please';
    }
   } else{
     message.textContent='you lost the game';
     document.body.style.backgroundColor = 'red';
     number.textContent=secretnumber;
     secretnumber =Math.trunc(Math.random()*20)+1;
     number.textContent=secretnumber;
     score=20;
     displayScore.textContent=score;
     document.querySelector('.guess').value='';
   }
});

btnAgain.addEventListener('click',function(){
  secretnumber =Math.trunc(Math.random()*20)+1;
  number.textContent=secretnumber;
  score=20;
  displayScore.textContent=score;
  
  message.textContent='start guessing.....';
  document.querySelector('.guess').value='';
  
});
