// Creating the Cards
let howManyTimes = 0

startGeneratingCards()

function startGeneratingCards() {
    let stopInterval = setInterval(function () {
        if(howManyTimes < 5) {
            // Player's Cards
            // Creating the Card
            let cardCreate = document.createElement('div')
            let cardCreateInterior = document.createElement('div')
            let cardCreateInteriorText = document.createElement('p')

            // Adding the styles
            cardCreate.className = 'cardStyle'
            cardCreateInterior.className = 'cardStyleInterior'
            let randomColorPosition = Math.floor(Math.random() * 4)
            cardCreateInterior.style.background = 'radial-gradient(' + randomColor[randomColorPosition] + ')'
            
            // The Number of the Card
            let numberOfCard = Math.floor(Math.random() * 14)

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
            let randomColorPositionComp = Math.floor(Math.random() * 4)
            cardCompCreateInteriorBack.style.background = 'radial-gradient(' + randomColor[randomColorPositionComp] + ')'
            
            // The Number of the Card
            let numberOfCardComp = Math.floor(Math.random() * 14)
            
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
            let randomColorPosition = Math.floor(Math.random() * 4)
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
            let numberOfCard = Math.floor(Math.random() * 14)

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

            // Adding the Hover Animation
            setTimeout(function () {
                for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                    cardPlayerChoose[i].addEventListener('mouseover', hoverUp)
                    cardPlayerChoose[i].addEventListener('mouseout', hoverBack)
                }
            }, 1000)
        }

        ++ howManyTimes
    }, 0);
}