// Game Start Test Cards
function startGamePoints() {
    if(cardCompChoose.length === 0 && !ifGameEnded) {
        loseSound.play()
        document.querySelector('#textBelowProfile p').innerHTML = 'Computer'
    
        yess()
    }
    else if(cardPlayerChoose.length === 0 && !ifGameEnded) {
        winSound.play()
        document.querySelector('#textBelowProfile p').innerHTML = 'You'

        yess()
    }
}

// Reset Game
resetButton.addEventListener('click', function () {
    selectSound.play()

    setTimeout(function () {
        window.location.reload();
    }, 500)
})


function yess() {
    endingScreen.style.display = 'flex'
    ifGameEnded = true
    flipCard.volume = 0

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
        document.querySelector('#buttonReset').style.opacity = '1'
    }, 1750)
}