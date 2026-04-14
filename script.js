const rock = document.querySelector("#rockButton")
const paper = document.querySelector("#paperButton")
const scissors = document.querySelector("#scissorsButton")
const div = document.createElement("div")
    div.classList.add("divResult")
const game = document.createElement("span")
    div.classList.add("result")

function addElements(){
    
}

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    let a
    rock.addEventListener("click", () => {
        a = "rock"
    })
    paper.addEventListener("click", () => {
        a = "paper"
    })
    scissors.addEventListener("click", () => {
        a = "scissors"
    })
    return a
}

function playRound(humanChoice, computerChoice){

    let result = null

    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            game.textContent(result)
        }else if(computerChoice === "paper"){
            result = "You lost! Paper beat rock!"
            game.textContent(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "scissors"){
            result = "You won! Rock beat scissors!"
            game.textContent(result)
            humanScore = humanScore + 1
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "paper"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            game.textContent(result)
        }else if(computerChoice === "scissors"){
            result = "You lost! Scissors beat paper!"
            game.textContent(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "rock"){
            result = "You won! Paper beat rock!"
            game.textContent(result)
            humanScore = humanScore + 1
        }
    }else if(humanChoice === "scissors"){
        if(computerChoice === "scissors"){
            result = "Nothing came of it! A draw."
            computerScore = computerScore + 1
            humanScore = humanScore + 1
            game.textContent(result)
        }else if(computerChoice === "rock"){
            result = "You lost! Rock beat scissors!"
            game.textContent(result)
            computerScore = computerScore + 1
        }else if(computerChoice === "paper"){
            result = "You won! Scissors beat paper!"
            game.textContent(result)
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