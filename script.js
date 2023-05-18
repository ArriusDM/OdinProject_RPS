const choicesRPS = ["rock", "paper", "scissors"]

const chooseRock = document.getElementById("rock")
const choosePaper = document.getElementById("paper")
const chooseScissors = document.getElementById("scissors")
const startGame = document.getElementById("start-btn")

let playerScore = 0
let cpuScore = 0


startGame.addEventListener("click", playGame)

chooseRock.addEventListener("click", getPlayerChoice())

function getComputerChoice() {
    const cpuIndex = Math.floor(Math.random() * choicesRPS.length)
    return computerSelection = choicesRPS[cpuIndex]
}
function getPlayerChoice() {
    let playerPrompt = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerPrompt.toLowerCase()

}

function playRound(playerchoice, cpuchoice) {
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you drew the round!`)
        return
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you lost the round!`)
        cpuScore++
        return
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you won the round!`)
        playerScore++
        return
    }

}
function playGame() {
    playerScore = 0
    cpuScore = 0
    while (playerScore < 5 && cpuScore < 5) {
        getPlayerChoice()
        getComputerChoice()
        playRound(playerSelection, computerSelection)
        console.log(playerScore, cpuScore)
        if (playerScore === 5) {
            console.log(`You won the game ${playerScore} to ${cpuScore}!`)
        } else if (cpuScore === 5) {
            console.log(`You lost the game ${playerScore} to ${cpuScore}!`)
        }
    }

}
