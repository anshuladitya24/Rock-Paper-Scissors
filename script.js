function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    let choice=Math.random()*100;
    if(choice > 0 && choice<=33.33) return choices[0];
    else if(choice > 33.33 && choice<=66.66) return choices[1];
    else if(choice > 66.66 && choice<=100) return choices[2];
}

function getHumanChoice(){
    let x=prompt("Enter your choice(rock/paper/scissors): ");
    return x;

}

function playRound(humanChoice,computerChoice){
    humanChoice=humanChoice.toLowerCase();
    computerChoice=computerChoice.toLowerCase();

    if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;

    }else if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;

    }else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore++;

    }else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beats Rock")
        humanScore++;

    }else if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;

    }else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;

    }else if(humanChoice==computerChoice){
        console.log("It's a tie you and the computer both chose "+ humanChoice + " and " +computerChoice)
    }
}

function playGame(){
    let humanSelection = "";
    let computerSelection = "";
    for(let i=0; i<5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore>computerScore) console.log("You won the game!");
    else if(humanScore<computerScore) console.log("You lose the game!");
    console.log("Your Score: "+humanScore+" ,Computer's Score: "+computerScore);
}

let humanScore=0;
let computerScore=0;
playGame();
