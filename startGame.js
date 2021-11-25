
// Declarations
let computersPoints = document.querySelector('#computersPoints p')
let playersPoints = document.querySelector('#playersPoints p')
let textAnnouncer = document.querySelector('#announcerText p')
let counterPointsPlayer = 0
let counterPointsComputer = 0

// Score Text
playersPoints.innerText = `Your Points: ${counterPointsPlayer}`
computersPoints.innerText = `Computer's Points: ${counterPointsComputer}`

// Game Start Test Cards
function startGamePoints(playerChosenValue, computerChosenValue) {
    if(playerChosenValue.src.indexOf('Stone') > 0 && computerChosenValue.src.indexOf('Scissors') > 0) {
        // Stone beats Scissors
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Stone') > 0 && computerChosenValue.src.indexOf('Lizard') > 0) {
        // Stone beats Lizard
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Stone') > 0 && computerChosenValue.src.indexOf('Stone') > 0) {
        // Stone equals Stone
        setTimeout(function () {
            tieSound.play()
    
            textAnnouncer.innerText = 'Tie!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Paper') > 0 && computerChosenValue.src.indexOf('Stone') > 0) {
        // Paper beats Stone
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Paper') > 0 && computerChosenValue.src.indexOf('Spock') > 0) {
        // Paper beats Spock
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Paper') > 0 && computerChosenValue.src.indexOf('Paper') > 0) {
        // Paper equals Paper
        setTimeout(function () {
            tieSound.play()
    
            textAnnouncer.innerText = 'Tie!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Scissors') > 0 && computerChosenValue.src.indexOf('Paper') > 0) {
        // Scissors beats Paper
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Scissors') > 0 && computerChosenValue.src.indexOf('Lizard') > 0) {
        // Scissors beats Lizard
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)

    }
    else if(playerChosenValue.src.indexOf('Scissors') > 0 && computerChosenValue.src.indexOf('Scissors') > 0) {
        // Scissors equals Scissors
        setTimeout(function () {
            tieSound.play()
    
            textAnnouncer.innerText = 'Tie!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Lizard') > 0 && computerChosenValue.src.indexOf('Paper') > 0) {
        // Lizard beats Paper
        setTimeout(function () {
            winSound.play()
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)

    }
    else if(playerChosenValue.src.indexOf('Lizard') > 0 && computerChosenValue.src.indexOf('Spock') > 0) {
        // Lizard beats Spock
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Lizard') > 0 && computerChosenValue.src.indexOf('Lizard') > 0) {
        // Lizard equals Lizard
        setTimeout(function () {
            tieSound.play()
    
            textAnnouncer.innerText = 'Tie!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Spock') > 0 && computerChosenValue.src.indexOf('Stone') > 0) {
        // Spock beats Stone
        setTimeout(function () {
            winSound.play()
    
            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)
    }
    else if(playerChosenValue.src.indexOf('Spock') > 0 && computerChosenValue.src.indexOf('Scissors') > 0) {
        // Spock beats Scissors
        setTimeout(function () {
            winSound.play()

            ++ counterPointsPlayer
            playersPoints.innerText = `Your Points: ${counterPointsPlayer}`

            textAnnouncer.innerText = 'Won!'
            animateText(textAnnouncer)
        }, 500)

    }
    else if(playerChosenValue.src.indexOf('Spock') > 0 && computerChosenValue.src.indexOf('Spock') > 0) {
        // Spock equals Spock
        setTimeout(function () {
            tieSound.play()
    
            textAnnouncer.innerText = 'Tie!'
            animateText(textAnnouncer)
        }, 500)
    }
    else {
        // Computer Wins
        setTimeout(function () {
            loseSound.play()
    
            ++ counterPointsComputer
            computersPoints.innerText = `Computer's Points: ${counterPointsComputer}`

            textAnnouncer.innerText = 'Lost!'
            animateText(textAnnouncer)

        }, 500)
    }
}

// Rotate Announcer Text
function animateText(textHere) {
    textHere.style.fontSize = '400px'

    textHere.animate([
            { 
                transform: 'rotate(30deg)' 
            },
            {   
                transform: 'rotate(-30deg)'
            },
        ], {
            duration: 1000
        })

        setTimeout(function () {
            textHere.style.fontSize = '0'
        }, 750)

        setTimeout(function () {
            textHere.innerText = ''
        }, 1000)
}