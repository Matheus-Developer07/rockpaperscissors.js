const rock = document.querySelector("#rockButton")
const paper = document.querySelector("#paperButton")
const scissors = document.querySelector("#scissorsButton")
const parentResult = document.querySelector("#divResults")
const div = document.createElement("div")
    div.classList.add("divResult")
const game = document.createElement("span")
    div.classList.add("result")
parentResult.appendChild(game)
const placar = document.createElement("span")
    div.classList.add("result")
parentResult.appendChild(placar)

function getComputerChoice(){
    const random = Math.floor(Math.random() * 3);

    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissors";
}

function addElements(a, b) {
    game.textContent = `Human ${a} X ${b} Computer`;
}

function playRound(humanChoice, computerChoice) {
    let result = "";
    let humanScore = 0;
    let computerScore = 0;

    if (humanChoice === computerChoice) {
        result = "Empate!";
        humanScore++;
        computerScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Você ganhou!";
        humanScore++;
    } else {
        result = "Você perdeu!";
        computerScore++;
    }

    placar.textContent = `  ${result} | ${humanScore} x ${computerScore}`;
}

function playGame(humanChoice) {
    const computer = getComputerChoice();

    addElements(humanChoice, computer);
    playRound(humanChoice, computer);
}
rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));