// Function for making the computer play as our opponent, this function returns rock,paper or scissors in the console randomely.
const computerPlay = ()=>{
    let randNum = (Math.ceil(Math.random()*3));
    if(randNum===1){
        return "Rock";
    }else if(randNum===2){
        return "Paper"
    }else if(randNum===3){
        return "Scissors";
    }
}

const playRound = (playerSelection, computerSelection)=>{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection=="ROCK" && computerSelection=="PAPER"){
        return "You Lose! Paper beats Rock!";
    }else if(playerSelection=="PAPER" && computerSelection=="ROCK"){
        return "You Win! Paper beats Rock!";
    }else if(playerSelection=="ROCK" && computerSelection=="SCISSORS"){
        return "You Win! Rock beats Scissors!";
    }else if(playerSelection=="SCISSORS" && computerSelection=="ROCK"){
        return "You Lose! Rock beats Scissors!";
    }else if(playerSelection=="SCISSORS" && computerSelection=="PAPER"){
        return "You Win! Scissors beat Paper!";
    }else if(playerSelection=="PAPER" && computerSelection=="SCISSORS"){
        return "You Lose! Scissors beat Paper!";
    }else if(playerSelection==computerSelection){
        return "Its a Tie!";
    }
}
const game = ()=>{
    //making use of prompt to enter user's choice and assign it to userInput variable
    let userScore = 0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        let userInput = prompt("Enter ur choice");
        let result = playRound(userInput,computerPlay());
        if(result==="You Lose! Paper beats Rock!" || result==="You Lose! Rock beats Scissors!" || result=== "You Lose! Scissors beat Paper!"){
            console.log(result);
            computerScore++;
        }else if(result==="You Win! Paper beats Rock!" || result==="You Win! Rock beats Scissors!" || result==="You Win! Scissors beat Paper!"){
            console.log(result);
            userScore++;
        }else if(result==="Its a Tie!"){
            console.log(result);
            continue;
        }
    }
    if(userScore>computerScore){
        console.log("You Won the Game!");
    }else if(userScore<computerScore){
        console.log("You Lose the Game!");
    }else if(userScore===computerScore){
        console.log("Game resulted in a Tie!");
    }
}
game();