// score objects
const yourScore     = document.querySelector('.score-cnt.you');
const comptuerScore = document.querySelector('.score-cnt.computer');

const addScore = obj => {
    const delim = ':'
    const baseTxt = obj.innerText.split(delim)[0] + delim;
    const score = Number(obj.innerText.split(delim)[1].trim());
    
    obj.innerText = `${baseTxt} ${score + 1}`;
}

const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]    
} 

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';
    
    // check inputs
    if (computerSelection !== rock && 
        computerSelection !== paper &&
        computerSelection !== scissors) {
            console.error(`Invalid computer selection`);
            return 'err';
    }
    if (playerSelection !== rock && 
        playerSelection !== paper &&
        playerSelection !== scissors) {
            console.error(`Invalid player selection`);
            return 'err';
    }

    if (playerSelection === rock){
        if      (computerSelection === rock)  return 0
        else if (computerSelection === paper) return -1
        else                                   return 1

    } else if (playerSelection === paper){
        if      (computerSelection === rock)  return 1
        else if (computerSelection === paper) return 0
        else                                   return -1

    } else {
        // player selects scissors
        if      (computerSelection === rock)  return -1
        else if (computerSelection === paper) return 1
        else                                  return 0
    }
}

const game = playerMove => {
    const computerMove = getComputerChoice();
    const result = playRound(playerMove, computerMove);

    // reset all computer's buttons
    const computerBtns = document.querySelectorAll('.selection.computer');
    computerBtns.forEach(btn => {
        btn.style['background-color'] = 'rgb(140, 141, 141)';
    });
    
    
    // tally score
    let computerColor;
    if (result === 1) {
        addScore(yourScore);
        computerColor = 'rgb(12, 218, 63)';
    }
    else if (result === -1) {
        addScore(comptuerScore);
        computerColor = 'red';
    }
    else computerColor = 'aliceblue';

    // style computer's move
    // change clor based on result 
    const computerBtn = document.querySelector(
        `.selection.computer.${computerMove.toLowerCase()}`
    );
    computerBtn.style['background-color'] = computerColor;
}

// add event listener to player's buttons
const playerButtons = document.querySelectorAll('.selection.you');
playerButtons.forEach(btn => {
    const playerMove = btn.innerText;
    btn.addEventListener('click', () => game(playerMove));
})