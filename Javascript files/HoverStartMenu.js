// Animation Card1 Hover
card1.addEventListener('mouseenter', function () {
    card1.style.top = '47%'
    card2.style.left = '53%'
    card3.style.left = '53%'
    card4.style.left = '53%'
    
    // Yellow Box Shadow Appearing
    card1.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6), 0 0 40px 10px rgb(255, 217, 0)'

    // Title Change Color
    document.querySelector('.titleAppearTop p').style.color = '#7290FD'

    // Particle Change Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = '#405191'
    })
    
    // Title Appear on Hover
    textAppearOnHover.style.opacity = 1
    textAppearParag.innerHTML = 'Singleplayer'
})

card1.addEventListener('mouseleave', function () {
    card1.style.top = '50%'
    card2.style.left = '50%'
    card3.style.left = '50%'
    card4.style.left = '50%'
    
    // Yellow Box Shadow Appearing
    card1.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6)'

    // Title Change to initial Color
    document.querySelector('.titleAppearTop p').style.color = 'rgba(0, 0, 0, 0.3)'

    // Particle Change to initial Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = 'rgb(221, 221, 221)'
    })

    // Title Disappear on Leaving
    textAppearOnHover.style.opacity = 0
})

// Animation Card2 Hover
card2.addEventListener('mouseenter', function () {
    card2.style.top = '47%'
    card3.style.left = '53%'
    card4.style.left = '53%'

    // Yellow Box Shadow Appearing
    card2.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6), 0 0 40px 10px rgb(255, 217, 0)'

    // Title Change Color
    document.querySelector('.titleAppearTop p').style.color = '#72fd72'

    // Particle Change Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = '#408a40'
    })


    // Title Appear on Hover
    textAppearOnHover.style.opacity = 1
    textAppearParag.innerHTML = 'Multiplayer'
})

card2.addEventListener('mouseleave', function () {
    card2.style.top = '50%'
    card3.style.left = '50%'
    card4.style.left = '50%'

    // Yellow Box Shadow Appearing
    card2.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6)'

    // Title Change to initial Color
    document.querySelector('.titleAppearTop p').style.color = 'rgba(0, 0, 0, 0.3)'

    // Particle Change to initial Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = 'rgb(221, 221, 221)'
    })
    
    // Title Disappear on Leaving
    textAppearOnHover.style.opacity = 0
})

// Animation Card3 Hover
card3.addEventListener('mouseenter', function () {
    card3.style.top = '47%'
    card4.style.left = '53%'

    // Yellow Box Shadow Appearing
    card3.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6), 0 0 40px 10px rgb(255, 217, 0)'

    // Title Change Color
    document.querySelector('.titleAppearTop p').style.color = '#fdd172'

    // Particle Change Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = '#92783f'
    })

    // Title Appear on Hover
    textAppearOnHover.style.opacity = 1
    textAppearParag.innerHTML = 'Settings'
})

card3.addEventListener('mouseleave', function () {
    card3.style.top = '50%'
    card4.style.left = '50%'

    // Yellow Box Shadow Appearing
    card3.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6)'

    // Title Change to initial Color
    document.querySelector('.titleAppearTop p').style.color = 'rgba(0, 0, 0, 0.3)'

    // Particle Change to initial Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = 'rgb(221, 221, 221)'
    })

    // Title Disappear on Leaving
    textAppearOnHover.style.opacity = 0
})

// Animation Card4 Hover
card4.addEventListener('mouseenter', function () {
    card4.style.top = '47%'

    // Yellow Box Shadow Appearing
    card4.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6), 0 0 40px 10px rgb(255, 217, 0)'

    // Title Change Color
    document.querySelector('.titleAppearTop p').style.color = '#ff5353'

    // Particle Change Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = '#8b2d2d'
    })

    // Title Appear on Hover
    textAppearOnHover.style.opacity = 1
    textAppearParag.innerHTML = 'Rules of DOS'
})

card4.addEventListener('mouseleave', function () {
    card4.style.top = '50%'

    // Yellow Box Shadow Appearing
    card4.style.boxShadow = '-10px 15px 10px rgba(0, 0, 0, 0.6)'

    // Title Change to initial Color
    document.querySelector('.titleAppearTop p').style.color = 'rgba(0, 0, 0, 0.3)'

    // Particle Change to initial Background
    document.querySelectorAll('.particle').forEach(function (element) {
        element.style.background = 'rgb(221, 221, 221)'
    })

    // Title Disappear on Leaving
    textAppearOnHover.style.opacity = 0
})


// Card1 onClick Start Game
card1.addEventListener('click', function () {
    // Play Select Sound
    selectSound.currentTime = 0
    selectSound.play()

    // Loading Screen Appearing
    loadingSreen.style.display = 'block'

    setTimeout(function () {
        loadingSreen.style.opacity = '1'
    }, 100)
    
    // Starting the Game
    reinitializingEverything()
    setTimeout(function () {
        startGeneratingCards()
    
        document.querySelector('.backgroundGame').style.display = 'block'
    }, 500)

    // Loading Screen Disappearing
    setTimeout(function () {
        startMenu.style.display = 'none'
        loadingSreen.style.opacity = '0'
    }, 1050)
    
    setTimeout(function () {
        loadingSreen.style.display = 'none'
    }, 1450)
})


// Card3 onClick Option Appear
card3.addEventListener('click', function () {
    // Play Select Sound
    selectSound.currentTime = 0
    selectSound.play()

    document.querySelector('#optionBox').style.display = 'flex'
    setTimeout(function () {
        document.querySelector('#optionBox').style.opacity = 1
    }, 100)
})

document.querySelector('#titleGoBackOption').addEventListener('click', function () {
    // Play Select Sound
    selectSound.currentTime = 0
    selectSound.play()
    
    document.querySelector('#optionBox').style.opacity = 0
    setTimeout(function () {
        document.querySelector('#optionBox').style.display = 'none'
    }, 265)
})



// Card4 onClick Rules Appear
card4.addEventListener('click', function () {
    // Play Select Sound
    selectSound.currentTime = 0
    selectSound.play()

    document.querySelector('#rulesBox').style.display = 'flex'
    setTimeout(function () {
        document.querySelector('#rulesBox').style.opacity = 1
    }, 100)
})

document.querySelector('#titleGoBackRules').addEventListener('click', function () {
    // Play Select Sound
    selectSound.currentTime = 0
    selectSound.play()
    
    document.querySelector('#rulesBox').style.opacity = 0
    setTimeout(function () {
        document.querySelector('#rulesBox').style.display = 'none'
    }, 265)
})


// Option Menu Volume Setting
setSoundVolume(0.1)

for(let i = 1; i <= 10; ++ i) {
    document.querySelector(`.cubeSound:nth-child(${i})`).addEventListener('click', function () {
        for(let j = 1; j <= i; ++ j) {
            // Set the volume to that button
            setSoundVolume(i / 10)

            // Play Select Sound
            selectSound.currentTime = 0
            selectSound.play()

            // Purple Background
            document.querySelector(`.cubeSound:nth-child(${j})`).style.background = 'rgb(172, 92, 172)'
        }
        
        for(let j = i + 1; j <= 10; ++ j) {
            // Initial Background
            document.querySelector(`.cubeSound:nth-child(${j})`).style.background = 'rgba(255, 227, 255, 0.6)'
        }
    })
}


// 
for(let i = 1; i <= 4; ++ i) {
    if(i === 4) {
        document.querySelector(`#startPack${i}`).addEventListener('click', function () {
            // Play Flip Sound
            flipCard.currentTime = 0
            flipCard.play()

            document.querySelector(`#startPack${i}`).style.top = randomNumberInt(105, 115) + '%'
            document.querySelector(`#startPack${i}`).style.left = -randomNumberInt(7, 25) + '%'

            setTimeout(function () {
                let initialTop = 81.5
                let j = 4

                let stopInterval = setInterval(function () {
                    if(j < 0) {
                        clearInterval(stopInterval)
                    }

                    document.querySelector(`#startPack${j}`).style.top = initialTop + '%'
                    document.querySelector(`#startPack${j}`).style.left = 0

                    -- j
                    initialTop -= 0.5
                }, 250)
            }, 500)
        })
    }
    else {
        document.querySelector(`#startPack${i}`).addEventListener('click', function () {
            // Play Flip Sound
            flipCard.currentTime = 0
            flipCard.play()

            document.querySelector(`#startPack${i}`).style.top = randomNumberInt(105, 115) + '%'
            document.querySelector(`#startPack${i}`).style.left = -randomNumberInt(7, 25) + '%'
        })
    }
}


// Setting the Volume Function
function setSoundVolume(volumeInput) {
    winSound.volume = volumeInput
    loseSound.volume = volumeInput
    flipCard.volume = volumeInput
    selectSound.volume = volumeInput
    dosSound.volume = volumeInput
}