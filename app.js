const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]    
} 

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    const winStr = `You win!`
    const loseStr = `You lose`
    const tieStr = `Cat's game`

    if (playerSelection === 'rock'){
        if      (computerSelection === 'rock')  return tieStr
        else if (computerSelection === 'paper') return loseStr
        else                                    return winStr

    } else if (playerSelection === 'paper'){
        if      (computerSelection === 'rock')  return winStr
        else if (computerSelection === 'paper') return tieStr
        else                                    return loseStr

    } else {
        // player selects scissors
        if      (computerSelection === 'rock')  return loseStr
        else if (computerSelection === 'paper') return winStr
        else                                    return tieStr
    }
}

const game = numGames => {
    for (let i = 1; i <= numGames; i++){
        const playerSelection = prompt(`Enter your play:`)
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

// add event listener to player's buttons
const playerButtons = document.querySelectorAll('.selection.you');
playerButtons.forEach(btn => {
    btn.addEventListener('click', 
        () => console.log(btn.innerText)
    )
})