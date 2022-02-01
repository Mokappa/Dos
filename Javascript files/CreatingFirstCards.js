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


// Generating all the Cards
function startGeneratingCards() {
    howManyTimes = 0

    let stopInterval = setInterval(function () {
        // How many Cards should be generated
        if(howManyTimes < 5) {
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
            
            // The Number of the Card
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

            // Adding the Card in the Player's Hand
            cardPlayerChoose.push(cardCreate)

            // Putting on Board Animation onClick
            cardCreate.addEventListener('click', function AnimationOnClick() {
                putOnBoardCard(cardCreate, AnimationOnClick)
            })


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
            
            // The Number of the Card
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

            // Adding the Card in the Computer's Hand
            cardCompChoose.push(cardCompCreate)
        }
        else {
            clearInterval(stopInterval)

            // Creating the Middle Card
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
                
            // The Number of the Middle Card
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
            
            // Putting the Middle Card in the HTML
            playersHand.appendChild(cardCreate)
            cardCreate.appendChild(cardCreateInterior)
            cardCreateInterior.appendChild(cardCreateInteriorText)

            // Formatting both Hands
            formattingCards(cardPlayerChoose)
            formattingCardsComputer(cardCompChoose)

            // Starting the actual Game
            setTimeout(function () {
                let whoStartsTheGame = randomNumberInt(1, 2)
 
                // The Player Starts
                if(whoStartsTheGame === 1) {
                    whoDrawsCards = 'player'
            
                    // Add Draw Card Animation and onClick Event
                    drawCard.addEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'workingCard 1s infinite alternate'
            
                    // Changing the Circle Arrow
                    middleArrow.style.fill = '#FFD900'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px #FFD900)'
            
                    // Enabling Player's Hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.filter = 'brightness(100%)'
                        cardPlayerChoose[i].style.pointerEvents = 'auto'
            
                        cardPlayerChoose[i].addEventListener('mouseover', hoverUp)
                        cardPlayerChoose[i].addEventListener('mouseout', hoverBack)
                    }
                }
                // The Computer Starts
                else {
                    whoDrawsCards = 'computer'
                    
                    // Remove Draw Card Animation and onClick Event
                    drawCard.removeEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'none'
                    
                    // Changing the Circle Arrow
                    middleArrow.style.fill = 'rgb(255, 0, 0)'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px rgb(255, 0, 0))'
            
                    // Disabling the Player's Hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.pointerEvents = 'none'
                        cardPlayerChoose[i].style.filter = 'brightness(60%)'
                    }

                    // Computer Playing
                    computerDelay = randomNumberInt(250, 750)
                    setTimeout(testIfComputerHasCard, computerDelay)
                }
            }, 500)
        }

        ++ howManyTimes
    }, 0);
}
