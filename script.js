const choicesRPS = ["rock", "paper", "scissors"]

const chooseRock = document.getElementById("rock")
const choosePaper = document.getElementById("paper")
const chooseScissors = document.getElementById("scissors")


let playerScore = document.getElementById('player-score').innerHTML = 0;
let cpuScore = document.getElementById('cpu-score').innerHTML = 0;
let infoText = document.getElementById('info-text')

let playerSelection = ""


chooseRock.addEventListener("click", playerChooseRock)
choosePaper.addEventListener("click", playerChoosePaper)
chooseScissors.addEventListener("click", playerChooseScissors)

function playerChooseRock() {
    playerSelection = "rock"
    playGame()
}
function playerChoosePaper() {
    playerSelection = "paper"
    playGame()
}
function playerChooseScissors() {
    playerSelection = "scissors"
    playGame()
}

function getComputerChoice() {
    const cpuIndex = Math.floor(Math.random() * choicesRPS.length)
    return computerSelection = choicesRPS[cpuIndex]
}

function playRound(playerchoice, cpuchoice) {
    if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you drew the round!`)
        document.getElementById('info-text').innerHTML = `You chose ${playerchoice} and the computer chose ${cpuchoice}, you drew the round!`
        return
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you lost the round!`)
        cpuScore++
        document.getElementById('cpu-score').innerHTML = cpuScore;
        document.getElementById('info-text').innerHTML = `You chose ${playerchoice} and the computer chose ${cpuchoice}, you lost the round!`
        return
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        console.log(`You chose ${playerchoice} and the computer chose ${cpuchoice}, you won the round!`)
        playerScore++
        document.getElementById('player-score').innerHTML = playerScore;
        document.getElementById('info-text').innerHTML = `You chose ${playerchoice} and the computer chose ${cpuchoice}, you won the round!`
        return
    }

}
function playGame() {
    if (playerScore < 5 && cpuScore < 5) {
        getComputerChoice()
        playRound(playerSelection, computerSelection)
        console.log(playerScore, cpuScore)
        if (playerScore === 5) {
            console.log(`You won the game ${playerScore} to ${cpuScore}!`)
            document.getElementById('info-text').innerHTML = `You won the game ${playerScore} to ${cpuScore}! Press any button to start another game`
        } else if (cpuScore === 5) {
            console.log(`You lost the game ${playerScore} to ${cpuScore}!`)
            document.getElementById('info-text').innerHTML = `You lost the game ${playerScore} to ${cpuScore}! Press any button to start another game`
        }
    } else if (playerScore >= 5 || cpuScore >= 5) {
        resetGame()
    }

}

function resetGame() {
    document.getElementById('info-text').innerHTML = `Select Rock, Paper, or Scissors to begin the game`
    document.getElementById('player-score').innerHTML = 0
    document.getElementById('cpu-score').innerHTML = 0
    playerScore = 0
    cpuScore = 0
    playerSelection = ""
    
}

// function startAndPlay() {
//     if (playerScore >= 5 || cpuScore >= 5) {
//         resetGame()
//     } else {
//         playGame()
//     }

// }


