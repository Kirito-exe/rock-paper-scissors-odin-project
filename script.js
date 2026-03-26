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
function scoreUpdation(){
    score.textContent = 'score:' + humanScore + '-' + computerScore;
}
function playRound(humanChoice,computerChoice){
        switch (computerChoice){
            case "rock":
                if (humanChoice==="paper") {humanScore++; scoreUpdation();return "Paper beats rock, U win";}
                else if (humanChoice==="scissors") {computerScore++;scoreUpdation();return "computer chose rock, U lose";}
                else {return "u both chose rock, draw";}
                break;
            case "paper":
                if (humanChoice==="scissors") {humanScore++;scoreUpdation();return "Scissors beats paper, U win";}
                else if (humanChoice==='rock') {computerScore++;scoreUpdation();return "computer chose paper,u lose";}
                else {return "u both chose paper, draw";}
                break;
            case "scissors":
                if (humanChoice==="rock") {humanScore++;scoreUpdation();return "Rock beats scissors, U win";}
                else if (humanChoice==="paper") {computerScore++;scoreUpdation();return "computer chose scissors, u lose";}
                else { return "u both chose scissors, draw";}
                break;
        }
        
    }

let buttons = document.querySelectorAll(".choice");
let result = document.querySelector("#results");
let score = document.querySelector("#score");
buttons.forEach((button) => button.addEventListener("click",() => result.textContent=playRound(button.textContent,getComputerChoice())))


    

