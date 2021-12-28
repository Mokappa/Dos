// Game Start Test Cards
function startGamePoints() {
    if(cardCompChoose.length === 0 && !ifGameEnded) {
        loseSound.play()
        document.querySelector('#textBelowProfile p').innerHTML = 'Computer'
    
        endGameScreen()
    }
    else if(cardPlayerChoose.length === 0 && !ifGameEnded) {
        winSound.play()
        document.querySelector('#textBelowProfile p').innerHTML = 'You'

        endGameScreen()
    }
}


// End Game Background
function endGameScreen() {
    console.log('end game appears')
    endingScreen.style.display = 'flex'
    ifGameEnded = true

    setTimeout(function () {
        endingScreen.style.width = '100%'
    }, 250)

    setTimeout(function () {
        textAnnouncer.style.opacity = '1'
    }, 1250)

    setTimeout(function () {
        document.querySelector('.whoWonBox').style.opacity = '1'
    }, 1500)

    setTimeout(function () {
        document.querySelector('.flexBoxButtons').style.opacity = '1'
        resetButton.style.pointerEvents = 'auto'
        mainMenuButton.style.pointerEvents = 'auto'
    }, 1750)
}


// Reset Game
resetButton.addEventListener('click', function () {
    // Play Select SOund
    selectSound.currentTime = 0
    selectSound.play()
    
    // EndGame Background Disappear
    textAnnouncer.style.opacity = '0'
    document.querySelector('.whoWonBox').style.opacity = '0'
    document.querySelector('.flexBoxButtons').style.opacity = '0'
    resetButton.style.pointerEvents = 'none'
    mainMenuButton.style.pointerEvents = 'auto'
    
    // Reinitializing every variable in the Game
    setTimeout(function () {
        reinitializingEverything()
    }, 250)
    
    // Generating the Cards again + restarting the Game
    setTimeout(function () {
        startGeneratingCards()
    }, 500)
    
    setTimeout(function () {
        endingScreen.style.width = '0'
    }, 1000)

    setTimeout(function () {
        endingScreen.style.display = 'none'
    }, 1250)
})


// Go to Main Menu Button
mainMenuButton.addEventListener('click', function () {
    // Play Select SOund
    selectSound.currentTime = 0
    selectSound.play()

    setTimeout(function () {
        location.reload()
    }, 400)
})