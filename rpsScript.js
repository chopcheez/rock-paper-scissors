

let computerPlay = function() {
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    let computerPick = computerChoices[Math.floor(Math.random() *computerChoices.length)];
    console.log(computerPick)
    return computerPick;
    }

let whoWon;
let playerWin;
let computerWin;
let drawWin;

const playButtonRock = document.querySelector('[data-playRock]');
const playButtonPaper = document.querySelector('[data-playPaper]');
const playButtonScissors = document.querySelector('[data-playScissors]');
const roundCounter = document.querySelector('[data-roundCount]');
const playerPointsCount = document.querySelector('[data-playerPoints]');
const cpuPointsCount = document.querySelector('[data-cpuPoints]');
const gameMessage = document.querySelector('[data-gameMessage]');

let playerWinCount = 0;
let computerWinCount = 0;
let round = 0;

playButtonRock.addEventListener('click', () => {
    //if (roundCounter.innerHTML == 1 && playerPointsCount.innerHTML == 0) {
        //console.log('test');
    //}
    playRound('rock');
})

playButtonPaper.addEventListener('click', () => {
    playRound('paper');
})

playButtonScissors.addEventListener('click', () => {
    playRound('scissors');
})

let playRound = function(playerSelection) {
    const computerSelection = computerPlay();
    const playerWinMessage = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    const computerWinMessage = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    const drawMessage = 'Draw! Both chose ' + computerSelection;

    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        whoWon = drawMessage;
        drawWin = drawMessage;
        console.log(whoWon);
    } else if ((playerSelection.toUpperCase() == 'ROCK') && (computerSelection.toUpperCase() == 'SCISSORS')) {
        whoWon = playerWinMessage;
        playerWin = playerWinMessage;
        playerWinCount++;
        playerPointsCount.innerHTML = playerWinCount;
        console.log(whoWon);
    } else if ((playerSelection.toUpperCase() == 'PAPER') && (computerSelection.toUpperCase() == 'ROCK')) {
        whoWon = playerWinMessage;
        playerWin = playerWinMessage;
        playerWinCount++;
        playerPointsCount.innerHTML = playerWinCount;
        console.log(whoWon);
    } else if ((playerSelection.toUpperCase() == 'SCISSORS') && (computerSelection.toUpperCase() == 'PAPER')) {
        whoWon = playerWinMessage;
        playerWin = playerWinMessage;
        playerWinCount++;
        playerPointsCount.innerHTML = playerWinCount;
        console.log(whoWon);
    } else {
        whoWon = computerWinMessage;
        computerWin = computerWinMessage;
        computerWinCount++;
        cpuPointsCount.innerHTML = computerWinCount;
        console.log(whoWon);
    }
    round++;
    roundCounter.innerHTML = round + 1;
    if (playerWinCount > 4) {
        gameMessage.innerHTML = 'CONGRATULATIONS YOU WIN!';
    } else if (computerWinCount > 4) {
        gameMessage.innerHTML = 'YOU LOSE!';
    }
}

