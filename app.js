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

const game = (playerMove, dom) => {
    const computerMove = getComputerChoice();
    const result = playRound(playerMove, computerMove);

    // style computer's buttons
    console.log(`#computer-${computerMove.toLowerCase()}`);
    const computerBtn = dom.querySelector(
        `#computer-${computerMove.toLowerCase()}`
    );
    computerBtn.style['background-color'] = 'red';

    // tally score
    if (result === 1) addScore(yourScore);
    else if (result === -1) addScore(comptuerScore);
}

// add event listener to player's buttons
const playerButtons = document.querySelectorAll('.selection.you');
playerButtons.forEach(btn => {
    const playerMove = btn.innerText;
    btn.addEventListener('click', () => game(playerMove, document));
})