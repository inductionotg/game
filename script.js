'use strict'
const score0EL=document.getElementById('score--0');
const score1EL=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const playe1El=document.querySelector('.player--0');
const playe0El=document.querySelector('.player--1');
const hold=document.querySelector('.btn--hold');
const reset=document.querySelector('.btn--new');
score1EL.textContent=0;
score0EL.textContent=0;
diceEl.classList.add('hidden');



const currEl1=document.getElementById('current--0');
const currEl2=document.getElementById('current--1');

let score,currentScore,activePlayer,playing;
const init=function(){
    score=[0,0];
    currentScore=0;
    activePlayer=0;
    playing=true;
    score1EL.textContent=0;
    score0EL.textContent=0;
    currEl1.textContent=0;
    currEl2.textContent=0;
    playe1El.classList.remove('player--winner')
    playe0El.classList.remove('player--winner')
    playe1El.classList.add('player--active')
    playe0El.classList.remove('player--active')
    
}
init();

//switc player function
const swichPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer === 0?1 : 0;
        currentScore =0;
        playe0El.classList.toggle('player--active');
        playe1El.classList.toggle('player--active');
}


//Generating a dice with the image
const btnroll=document.querySelector('.btn--roll');
btnroll.addEventListener('click',function()
{
    if (playing){
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(typeof dice);
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    if (dice!==1){
        if (activePlayer===0){
            currentScore=currentScore+dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else{
        currentScore=currentScore+dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        
    }
    else {
        swichPlayer();
        

    }
}
});

hold.addEventListener('click', function(){
    if (playing){
    score[activePlayer]=score[activePlayer]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

    if (score[activePlayer]>=20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }
    else{

    swichPlayer();
    }
}
})

reset.addEventListener('click',init);