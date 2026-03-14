function getComputerChoice(){
    const random = Math.floor(Math.random()*3)
    if (random===0) return "rock";
    else if (random===1) return "paper";
    else return "scissors"
}
function getHumanChoice(){
    const sign = prompt("Enter your choice (rock/paper/scissors)").toLowerCase();
    return sign
}
    let humanScore = 0;
    let computerScore=0;
function playRound(humanChoice,computerChoice){
        switch (computerChoice){
            case "rock":
                if (humanChoice==="paper") {humanScore++; return "Paper beats rock, U win";}
                else if (humanChoice==="scissors") {computerScore++;return "computer chose rock, U lose";}
                else {return "u both chose rock, draw";}
                break;
            case "paper":
                if (humanChoice==="scissors") {humanScore++;return "Scissors beats paper, U win";}
                else if (humanChoice==='rock') {computerScore++;return "computer chose paper,u lose";}
                else {return "u both chose paper, draw";}
                break;
            case "scissors":
                if (humanChoice==="rock") {humanScore++;return "Rock beats scissors, U win";}
                else if (humanChoice==="paper") {computerScore++;return "computer chose scissors, u lose";}
                else { return "u both chose scissors, draw";}
                break;
        }
    }

function playGame(){
    for (let i=0; i<5;i++){
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();
        console.log(playRound(humanChoice,computerChoice));
        console.log(humanScore);
        console.log(computerScore);
    }
    
}
playGame()