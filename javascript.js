let choice= ["ROCK","PAPER","SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let level = 1;

function getComputerChoice(){
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice: ");
    playerSelection = playerSelection.toUpperCase();

    console.log("Player's choice: "+playerSelection);
    console.log("Computer's choice: "+computerSelection);

    if(computerSelection == playerSelection){
        return("A tie !!! You both chose "+ playerSelection);
    }else if(computerSelection == choice[0] && playerSelection == choice[1]){
        playerScore++;
        return("You win!!");//rock paper
    }else if(computerSelection == choice[0] && playerSelection == choice[2]){
        computerScore++;
        return("You lose! Rock beates Scissors");//rock scissors
    }else if(computerSelection == choice[1] && playerSelection == choice[0]){
        computerScore++;
        return("You lose! Paper beates Rock");//paper rock
    }else if(computerSelection == choice[1] && playerSelection == choice[2]){
        playerScore++;
        return("You Win!!");//paper scissors
    }else if(computerSelection == choice[2] && playerSelection == choice[0]){
        playerScore++;
        return("You Win!!");//scissor rock
    }else if(computerSelection == choice[2] && playerSelection == choice[1]){
        computerScore++;
        return("You lose ! Scissors beats paper");//scissor paper
    }else{
        level--;
        return("ERROR: INVALID INPUT or NO INPUT INSERTED");
    }
}

function game(){
    console.log("LET'S PLAY ROCK PAPER SCISSORS!!\n\n");
    for(level = 1; level<= 5; level++){
        console.log("ROUND " + level);
        console.log(playRound());
        console.log("Player's score: "+playerScore+" | Computer's score: "+computerScore+"\n\n");
    }
    if(playerScore > computerScore){
        console.log("YOU WIN!!\nGame over...");
    }else if(playerScore < computerScore){
        console.log("YOU LOSE!!\nGame over...");
    }else{
        console.log("A TIE!!\nGame over...");
    }
}

game();