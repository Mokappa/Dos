// Reinitializing everything with 0
function reinitializingEverything() {
    // Game will start again
    ifGameEnded = false

    // Clearing both hands
    playersHand.innerHTML = ''
    computersHand.innerHTML = ''

    // Reinitializing the variables
    battleIsNotOver = false
    drawThisAmount = 1
    cardIndex = 0
    // Player
    cardPlayerChoose = []
    howManyPlayerCardsofcertainNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    manyCards = false
    // Computer
    cardCompChoose = []
    howManyComputerCardsofcertainNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}


// Generating all the cards
function startGeneratingCards() {
    howManyTimes = 0

    let stopInterval = setInterval(function () {
        // How many cards should be generated
        if(howManyTimes < 5) {
            // Player's cards
            // Creating the card
            let cardCreate = document.createElement('div')
            let cardCreateInterior = document.createElement('div')
            let cardCreateInteriorText = document.createElement('p')

            // Adding the styles
            cardCreate.className = 'cardStyle'
            cardCreateInterior.className = 'cardStyleInterior'
            let randomColorPosition = randomNumberInt(0, 3)
            cardCreateInterior.style.background = 'radial-gradient(' + randomColor[randomColorPosition] + ')'
            
            // The number of the card
            let numberOfCard = randomNumberInt(0, 13)

            ++ howManyPlayerCardsofcertainNumber[numberOfCard]

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
            
            // Putting them in the HTML
            playersHand.appendChild(cardCreate)
            cardCreate.appendChild(cardCreateInterior)
            cardCreateInterior.appendChild(cardCreateInteriorText)

            // Adding the card in the Player's hand
            cardPlayerChoose.push(cardCreate)

            // Putting on board animation onClick
            cardCreate.addEventListener('click', function AnimationOnClick() {
                putOnBoardCard(cardCreate, AnimationOnClick)
            })


            // Computer's cards
            // Creating the card
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
            
            // The number of the card
            let numberOfCardComp = randomNumberInt(0, 13)
            
            ++ howManyComputerCardsofcertainNumber[numberOfCardComp]

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
            
            // Putting them in the HTML
            computersHand.appendChild(cardCompCreate)
            cardCompCreate.appendChild(cardCompCreateInterior)
            cardCompCreateInterior.appendChild(cardCompCreateInteriorImage)
            cardCompCreate.appendChild(cardCompCreateInteriorBack)
            cardCompCreateInteriorBack.appendChild(cardCompCreateInteriorBackText)

            // Adding the card in the Computer's hand
            cardCompChoose.push(cardCompCreate)
        }
        else {
            clearInterval(stopInterval)

            // Creating the middle card
            let cardCreate = document.createElement('div')
            let cardCreateInterior = document.createElement('div')
            let cardCreateInteriorText = document.createElement('p')

            // Adding the styles
            cardCreate.className = 'cardStyle'
            cardCreateInterior.className = 'cardStyleInterior'
            let randomColorPosition = randomNumberInt(0, 3)
            cardCreateInterior.style.background = 'radial-gradient(' + randomColor[randomColorPosition] + ')'

            let bottomRandom = randomNumberInt(35, 40)
            cardCreate.style.bottom = bottomRandom + '%'
            cardCreate.style.margin = '0'
            cardCreate.style.cursor = 'default'
            transformThePlayerCard(cardCreate, randomNumberInt(1, 5))
            cardCreate.style.zIndex = cardIndex
            ++ cardIndex

            chosenValueLastPlayedCard = cardCreate
                
            // The number of the middle card
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
            
            // Putting the middle card in the HTML
            playersHand.appendChild(cardCreate)
            cardCreate.appendChild(cardCreateInterior)
            cardCreateInterior.appendChild(cardCreateInteriorText)

            // Formatting both hands
            formattingCards(cardPlayerChoose)
            formattingCardsComputer(cardCompChoose)

            // Starting the actual Game
            setTimeout(function () {
                let whoStartsTheGame = randomNumberInt(1, 2)
 
                // The Player starts
                if(whoStartsTheGame === 1) {
                    whoDrawsCards = 'player'
            
                    // Add draw card animation and onClick event
                    drawCard.addEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'workingCard 1s infinite alternate'
            
                    // Changing the circle arrow
                    middleArrow.style.fill = '#FFD900'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px #FFD900)'
            
                    // Enabling Player's hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.filter = 'brightness(100%)'
                        cardPlayerChoose[i].style.pointerEvents = 'auto'
            
                        cardPlayerChoose[i].addEventListener('mouseover', hoverUp)
                        cardPlayerChoose[i].addEventListener('mouseout', hoverBack)
                    }
                }
                // The Computer starts
                else {
                    whoDrawsCards = 'computer'
                    
                    // Remove draw card animation and onClick event
                    drawCard.removeEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'none'
                    
                    // Changing the circle arrow
                    middleArrow.style.fill = 'rgb(255, 0, 0)'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px rgb(255, 0, 0))'
            
                    // Disabling the Player's hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.pointerEvents = 'none'
                        cardPlayerChoose[i].style.filter = 'brightness(60%)'
                    }

                    // Computer playing
                    computerDelay = randomNumberInt(250, 750)
                    setTimeout(testIfComputerHasCard, computerDelay)
                }
            }, 500)
        }

        ++ howManyTimes
    }, 0);
}
