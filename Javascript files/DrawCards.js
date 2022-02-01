// Drawing a Card Animation
drawCard.addEventListener('click', drawSomeCards)
drawCardLast.style.animation = 'workingCard 1s infinite alternate'

function drawSomeCards() {
    // Play Flip Sound
    flipCard.currentTime = 0
    flipCard.play()

    // Player Draws Cards
    if(whoDrawsCards === 'player') {
        // Disabling the Draw Cards
        drawCard.removeEventListener('click', drawSomeCards)
        drawCardLast.style.animation = 'none'

        // Change Middle Arrow for Computer
        middleArrow.style.fill = 'rgb(255, 0, 0)'
        middleArrow.style.filter = 'drop-shadow(0px 0px 30px rgb(255, 0, 0))'

        battleIsNotOver = false

        // Computer Playing
        whoDrawsCards = 'computer'
        computerDelay = randomNumberInt(250, 750)
        setTimeout(testIfComputerHasCard, computerDelay)

        let howManyTimes = 0

        let stopInterval = setInterval(function () {
            if(howManyTimes < drawThisAmount) {
                // Player's Cards
                // Creating the Card
                let cardCreate = document.createElement('div')
                let cardCreateInterior = document.createElement('div')
                let cardCreateInteriorText = document.createElement('p')

                // Adding the styles
                cardCreate.className = 'cardStyle'
                cardCreateInterior.className = 'cardStyleInterior'
                let randomColorPosition = randomNumberInt(0, 3)
                cardCreateInterior.style.background = 'radial-gradient(' + randomColor[randomColorPosition] + ')'

                // Putting them in the HTML
                playersHand.appendChild(cardCreate)
                cardCreate.appendChild(cardCreateInterior)
                cardCreateInterior.appendChild(cardCreateInteriorText)

                // Animation coming from the Draw Pack
                cardCreate.style.height = '25%'
                cardCreate.style.width = '7%'
                cardCreate.style.bottom = '25%'
                cardCreate.style.marginRight = '-62.5%'
                cardCreate.style.transform = 'rotateX(65deg) rotateZ(40deg)'

                // Into the Player's Hand
                if(deviceType() === "desktop") {
                    setTimeout(function () {
                        cardCreate.style.height = '27%'
                        cardCreate.style.width = '8%'
                        cardCreate.style.bottom = '3%'
                        cardCreate.style.marginRight = '0'
                        cardCreate.style.transform = 'rotateZ(0deg)'
                    }, 250)
                }
                else {
                    setTimeout(function () {
                        cardCreate.style.height = '30%'
                        cardCreate.style.width = '8%'
                        cardCreate.style.bottom = '3%'
                        cardCreate.style.marginRight = '0'
                        cardCreate.style.transform = 'rotateZ(0deg)'
                    }, 250)
                }

                // The Number of the Card
                let numberOfCard = randomNumberInt(0, 13)

                if(numberOfCard === 2 || numberOfCard === 3) {
                    cardCreateInteriorText.innerHTML = `+${numberOfCard}`
                }
                else if(numberOfCard === 12) {
                    cardCreateInteriorText.innerHTML = '👸'
                }
                else if(numberOfCard === 13) {
                    cardCreateInteriorText.innerHTML = '🤴'
                }
                else {
                    cardCreateInteriorText.innerHTML = numberOfCard
                }

                cardCreate.setAttribute('data-numbercard', numberOfCard)
                cardCreate.setAttribute('data-colorcard', randomColorName[randomColorPosition])
  
                // Adding the Card in the Player's Hand
                cardPlayerChoose.push(cardCreate)
                ++ howManyPlayerCardsofcertainNumber[+cardCreate.getAttribute("data-numbercard")]

                // Putting on Board Animation onClick
                cardCreate.addEventListener('click', function AnimationOnClick() {
                    putOnBoardCard(cardCreate, AnimationOnClick)
                })
            } 
            else {
                clearInterval(stopInterval)

                drawThisAmount = 1
                
                // Disabling the Player's Hand
                for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                    cardPlayerChoose[i].style.pointerEvents = 'none'
                    cardPlayerChoose[i].style.filter = 'brightness(60%)'
                }

                // Formatting Player's Hand
                setTimeout(function () {
                    formattingCards(cardPlayerChoose)
                }, 500)
            }

            ++ howManyTimes
        }, 0)
    } 
    // Computer Draws Cards
    else {
        whoDrawsCards = 'player'
        battleIsNotOver = false

        let howManyTimes = 0

        let stopInterval = setInterval(function () {
            if(howManyTimes < drawThisAmount) {
                // Computer's Cards
                // Creating the Card
                let cardCompCreate = document.createElement('div')
                let cardCompCreateInterior = document.createElement('div')
                let cardCompCreateInteriorImage = document.createElement('img')
                let cardCompCreateInteriorBack = document.createElement('div')
                let cardCompCreateInteriorBackText = document.createElement('p')

                // Adding the styles
                cardCompCreate.className = 'cardCompStyle'
                cardCompCreateInterior.className = 'cardCompStyleInterior'
                cardCompCreateInteriorImage.src = './Images/DOS.png'
                cardCompCreateInteriorBack.className = 'cardCompStyleInteriorBack'
                let randomColorPositionComp = randomNumberInt(0, 3)
                cardCompCreateInteriorBack.style.background = 'radial-gradient(' + randomColor[randomColorPositionComp] + ')'

                // Putting them in the HTML
                computersHand.appendChild(cardCompCreate)
                cardCompCreate.appendChild(cardCompCreateInterior)
                cardCompCreateInterior.appendChild(cardCompCreateInteriorImage)
                cardCompCreate.appendChild(cardCompCreateInteriorBack)
                cardCompCreateInteriorBack.appendChild(cardCompCreateInteriorBackText)

                // Animation coming from the Draw Pack
                cardCompCreate.style.height = '25%'
                cardCompCreate.style.width = '7%'
                cardCompCreate.style.top = '50%'
                cardCompCreate.style.marginRight = '-62.5%'
                cardCompCreate.style.transform = 'rotateX(65deg) rotateZ(40deg)'

                // Into the Computer's Hand
                setTimeout(function () {
                    cardCompCreate.style.height = '27%'
                    cardCompCreate.style.width = '8%'
                    cardCompCreate.style.top = '4.25%'
                    cardCompCreate.style.marginRight = '0'
                    cardCompCreate.style.transform = 'rotateZ(0deg) scale(0.6)'
                }, 250)

                // The Number of the Card
                let numberOfCardComp = randomNumberInt(0, 13)

                if(numberOfCardComp === 2 || numberOfCardComp === 3) {
                    cardCompCreateInteriorBackText.innerHTML = `+${numberOfCardComp}`
                }
                else if(numberOfCardComp === 12) {
                    cardCompCreateInteriorBackText.innerHTML = '👸'
                }
                else if(numberOfCardComp === 13) {
                    cardCompCreateInteriorBackText.innerHTML = '🤴'
                }
                else {
                    cardCompCreateInteriorBackText.innerHTML = numberOfCardComp
                }

                cardCompCreate.setAttribute('data-numbercard', numberOfCardComp)
                cardCompCreate.setAttribute('data-colorcard', randomColorName[randomColorPositionComp])

                // Adding the Card in the Computer's Hand
                cardCompChoose.push(cardCompCreate)
                ++ howManyComputerCardsofcertainNumber[+cardCompCreate.getAttribute('data-numbercard')]
            } 
            else {
                clearInterval(stopInterval)

                drawThisAmount = 1

                // Formatting Computer's Hands
                setTimeout(function () {
                    formattingCardsComputer(cardCompChoose)
                }, 500)
            }

            ++ howManyTimes
        }, 0)
    }
}