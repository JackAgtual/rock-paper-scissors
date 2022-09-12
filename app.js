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

