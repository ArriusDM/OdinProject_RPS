const choicesRPS = ["rock", "paper", "scissors"]

// let playerPrompt = prompt("Rock, Paper, or Scissors?")

// let computerSelection = getComputerChoice
// let playerSelection = getPlayerChoice()

let playerScore = 0
let cpuScore = 0

function getComputerChoice() {
    const cpuIndex = Math.floor(Math.random() * choicesRPS.length)
    return computerSelection = choicesRPS[cpuIndex]
}
function getPlayerChoice() {
    let playerPrompt = prompt("Rock, Paper, or Scissors?")
    playerSelection = playerPrompt.toLowerCase()
}

// find a way to minimize repetition 
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
        // } else if (playerSelection === "paper" && computerSelection === "rock") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you won the round!`)
        //     playerScore++
        //     return 
        // } else if (playerSelection === "paper" && computerSelection === "paper") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, its a draw!`)
        //     return 
        // } else if (playerSelection === "paper" && computerSelection === "scissors") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you lost the round!`)
        //     cpuScore++
        //     return 
        // } else if (playerSelection === "scissors" && computerSelection === "rock") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you lost the round!`)
        //     cpuScore++
        //     return 
        // } else if (playerSelection === "scissors" && computerSelection === "paper") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you won the round!`)
        //     playerScore++
        //     return 
        // } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        //     console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, its a draw!`)
        //     return 
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
            console.log(`You won the game ${playerScore} to ${cpuScore}`)
        } else if (cpuScore === 5) {
            console.log(`You lost the game ${playerScore} to ${cpuScore}`)
        }
    }

}


playGame()
// playRound(playerSelection, computerSelection)
// console.log(computerSelection)





// Create array to hold player and cpu options
// generate cpu selection from array
    // generate number between 0-2 for array index choice
// player input selection
    // ideally from prompt or GUI

// 