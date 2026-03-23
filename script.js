function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    let a
    a = prompt("Rock, paper or scissors?")
    if(a === null) return null;
    a = a.toLowerCase()
    return a
}

let humanScore = 0
let computerScore = 0

let algorithm = getComputerChoice()
if(algorithm === 0){
    algorithm = "Rock"
    algorithm = algorithm.toLowerCase()
}else if(algorithm === 1){
    algorithm = "Paper"
    algorithm = algorithm.toLowerCase()
}else if(algorithm === 2){
    algorithm = "Scissors"
    algorithm = algorithm.toLowerCase()
}

function playRound(humanChoice, computerChoice){

    let result = null

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            console.log(result)
        }else if(computerChoice === "paper"){
            result = "You lost! Paper beat rock!"
            console.log(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "scissors"){
            result = "You won! Rock beat scissors!"
            console.log(result)
            humanScore = humanScore + 1
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            console.log(result)
        }else if(computerChoice === "scissors"){
            result = "You lost! Scissors beat paper!"
            console.log(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "rock"){
            result = "You won! Paper beat rock!"
            console.log(result)
            humanScore = humanScore + 1
        }
    }else if(humanChoice === "scissors"){
        if(computerChoice === "scissors"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            console.log(result)
        }else if(computerChoice === "rock"){
            result = "You lost! Rock beat scissors!"
            console.log(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "paper"){
            result = "You won! Scissors beat paper!"
            console.log(result)
            humanScore = humanScore + 1
        }
    }
}

for(let i = 0; i < 5; i++){
    let human = getHumanChoice()
    let computer = getComputerChoice()
    if(computer === 0){
        computer = "rock"
    }else if(computer === 1){
        computer = "paper"
    }else{
        computer = "scissors"
    }
    playRound(human, computer)
    console.log(`Placar: Humano ${humanScore} X ${computerScore} Computador`)
}
if(humanScore > computerScore){
    console.log("Você ganhou!")
}else if(humanScore < computerScore){
    console.log("Você perdeu!")
}else if(humanScore === computerScore){
    console.log("Empate!")
}