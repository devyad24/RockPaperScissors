let playerScore = 0;
let computerScore = 0;
function computerPlay(){
    let value = Math.ceil(Math.random()*3);
    return value;
}
const choiceRock = document.querySelector('.rock');
const choicePaper = document.querySelector('.paper');
const choiceScissors = document.querySelector('.scissors');
const rpsButtons = document.querySelectorAll('.btns button');
const displayPscore = document.querySelector('.playerScore');
const displayCscore = document.querySelector('.computerScore');
const roundResult = document.querySelector('.round-result');
const finalResult = document.querySelector('.final-result');
const playagain = document.querySelector('.play-again button');

choiceRock.addEventListener('click',()=>{
    playRound(1,computerPlay());
    gameResult();
});
choicePaper.addEventListener('click',()=>{
    playRound(2,computerPlay());
    gameResult();
});
choiceScissors.addEventListener('click',()=>{
    playRound(3,computerPlay());
    gameResult();
});

function playRound(playerChoice,computerChoice){
   
    if(playerChoice===1 && computerChoice===2){
        roundResult.textContent = 'You Lose, Paper beats Rock.';
        displayCscore.textContent = `${++computerScore}`;
    }else if(playerChoice===1 && computerChoice===3){
        roundResult.textContent = 'You Win,Rock beats Scissors.';
        displayPscore.textContent =`${++playerScore}`;
    }else if(playerChoice===2 && computerChoice===1){
        roundResult.textContent = 'You Win,Paper beats Rock.';
        displayPscore.textContent =`${++playerScore}`;
    }else if(playerChoice===2 && computerChoice===3){
        roundResult.textContent = 'You Lose,Scissors beats Paper.';
        displayCscore.textContent = `${++computerScore}`;
    }else if(playerChoice===3 && computerChoice===1){
        roundResult.textContent = 'You Lose,Rock beats Scissors.';
        displayCscore.textContent = `${++computerScore}`;
    }else if(playerChoice===3 && computerChoice===2){
        roundResult.textContent = 'You Win,Scissors beats Paper.';
        displayPscore.textContent =`${++playerScore}`;
    }else if(playerChoice===computerChoice){
        roundResult.textContent = 'Its a tie.';
    }
}
function gameResult(){
    if(playerScore===5 || computerScore===5){
        roundResult.textContent = '';
        playagain.style.display = 'block';
        rpsButtons.forEach(e=>e.disabled = true);
        rpsButtons.forEach(e=>e.style.transitio)
        playagain.addEventListener('click',gameReset);
        if(playerScore>computerScore){
            finalResult.textContent = 'YOU WON!';
            displayPscore.style.color = '#adff02';
            displayCscore.style.color = '#e5383b';
        }else if(playerScore<computerScore){
            finalResult.textContent = 'YOU LOSS!';
            displayPscore.style.color = '#e5383b';
            displayCscore.style.color = '#adff02';
        }
    }    
}
function gameReset(){
    playerScore = 0;
    computerScore = 0;
    displayPscore.textContent = '0';
    displayCscore.textContent = '0';
    displayPscore.style.color = '#fefae0';
    displayCscore.style.color = '#fefae0';
    playagain. style.display = 'none';
    finalResult.textContent = '';
    rpsButtons.forEach(e=>e.disabled=false);
}
