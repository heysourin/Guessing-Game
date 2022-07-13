'use strict';

// document.querySelector('.message').textContent='Correct Number🥂';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=5;

const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent=secretNumber;

//Check button:
document.querySelector('.check').addEventListener('click', function(){
//as any input from  user is a string
    const guess=Number(document.querySelector('.guess').value);
    // consol.log(guess);

    if(!guess){
        document.querySelector('.message').textContent='⛔ No number';
    }else if(guess===secretNumber){
        document.querySelector('.message').textContent='Correct Number🥂';
    }else if(guess>secretNumber){
        document.querySelector('.message').textContent='Too High!';
    }else if(guess<secretNumber){
        document.querySelector('.message').textContent='Too Low!';
    }
    else{
        document.querySelector('.message').textContent='Try again!';
    }
});