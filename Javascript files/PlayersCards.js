// Putting the Player's card on the board
function putOnBoardCard(selectedCardBoard, removeFunction) {
    if((selectedCardBoard.getAttribute('data-numbercard') === chosenValueLastPlayedCard.getAttribute('data-numbercard')) || (selectedCardBoard.getAttribute('data-colorcard') === chosenValueLastPlayedCard.getAttribute('data-colorcard') && !battleIsNotOver && !manyCards) || ((selectedCardBoard.getAttribute('data-numbercard') === '2' || selectedCardBoard.getAttribute('data-numbercard') === '3') && (selectedCardBoard.getAttribute('data-colorcard') === chosenValueLastPlayedCard.getAttribute('data-colorcard')) && battleIsNotOver && !manyCards)) {
        clearTimeout(those5Seconds)

        // Play sound
        flipCard.currentTime = 0
        flipCard.play()

        // Removing the animations of the played card
        selectedCardBoard.removeEventListener('click', removeFunction)
        selectedCardBoard.removeEventListener('mouseover', hoverUp)
        selectedCardBoard.removeEventListener('mouseout', hoverBack)
    
        // Applying styles to the played card
        let bottomRandom = randomNumberInt(35, 40)
        selectedCardBoard.style.bottom = bottomRandom + '%'
        selectedCardBoard.style.margin = '0'
        selectedCardBoard.style.cursor = 'default'
        transformThePlayerCard(selectedCardBoard, randomNumberInt(1, 5))
        selectedCardBoard.style.zIndex = cardIndex
        ++ cardIndex
    
        // Remove the card from the Player's hand
        const indexReemove = cardPlayerChoose.indexOf(selectedCardBoard)
        cardPlayerChoose.splice(indexReemove, 1)
        -- howManyPlayerCardsofcertainNumber[+selectedCardBoard.getAttribute('data-numbercard')]

        // See if Player has 2 cards
        if(cardPlayerChoose.length === 2) {
            dosSound.currentTime = 0
            dosSound.play()

            // Rotate announcer text
            let DosAnnouncer = document.querySelector('#dosAnnouncer')
           
            if(deviceType() === "desktop") {
                DosAnnouncer.style.fontSize = '400px'
            }
            else {
                DosAnnouncer.style.fontSize = '200px'
            }

            DosAnnouncer.animate(
                [
                    { 
                        transform: 'translate(-50%, -50%) rotate(30deg)' 
                    },
                    {   
                        transform: 'translate(-50%, -50%) rotate(-30deg)'
                    }
                ], 
                {
                    duration: 750
                }
            )

            setTimeout(function () {
                DosAnnouncer.style.fontSize = '0'
            }, 500)
        }
    
        // The Chosen Value
        chosenValueLastPlayedCard = selectedCardBoard
        if(selectedCardBoard.getAttribute('data-numbercard') === '2' || selectedCardBoard.getAttribute('data-numbercard')  === '3') {
            if(drawThisAmount === 1) {
                drawThisAmount = 0
            }
            
            drawThisAmount += +selectedCardBoard.getAttribute('data-numbercard')
    
            battleIsNotOver = true
        }
    
        // If Player has more cards of one type, let 5 more seconds to choose
        if(howManyPlayerCardsofcertainNumber[+selectedCardBoard.getAttribute('data-numbercard')] > 0) {
            manyCards = true
            // Remove drawing animation
            drawCard.removeEventListener('click', drawSomeCards)
            drawCardLast.style.animation = 'none'

            those5Seconds = setTimeout(function () {
                // Let the Computer to draw cards
                manyCards = false
                whoDrawsCards = 'computer'

                // Formatting the Player's hand
                formattingCards(cardPlayerChoose)
                
                // Disabling the Player's hand
                for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                    cardPlayerChoose[i].style.filter = 'brightness(60%)'
                    cardPlayerChoose[i].style.pointerEvents = 'none'
                }

                // Change middle arrow for computer
                middleArrow.style.fill = 'rgb(255, 0, 0)'
                middleArrow.style.filter = 'drop-shadow(0px 0px 30px rgb(255, 0, 0))'
            
                // Let Computer play
                computerDelay = randomNumberInt(250, 750)
                setTimeout(testIfComputerHasCard, computerDelay)
            }, 4000)
        }
        else if(howManyPlayerCardsofcertainNumber[+selectedCardBoard.getAttribute('data-numbercard')] <= 0) {
            // Let the Computer to draw cards
            manyCards = false
            whoDrawsCards = 'computer'

            // Formatting the Player's hand
            formattingCards(cardPlayerChoose)
            
            // Disabling the Player's hand
            for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                cardPlayerChoose[i].style.pointerEvents = 'none'
                cardPlayerChoose[i].style.filter = 'brightness(60%)'
            }

            // Change middle arrow for Computer
            middleArrow.style.fill = 'rgb(255, 0, 0)'
            middleArrow.style.filter = 'drop-shadow(0px 0px 30px rgb(255, 0, 0))'
        
            // Computer playing
            computerDelay = randomNumberInt(250, 750)
            setTimeout(testIfComputerHasCard, computerDelay)

            // Remove drawing animation
            drawCard.removeEventListener('click', drawSomeCards)
            drawCardLast.style.animation = 'none'
        }

        // See if the Player won
        startGamePoints()
    }
}


// Hover Animation
function hoverUp() {
    this.style.marginBottom = '3%'
    this.style.zIndex = 999
}

function hoverBack() {
    this.style.marginBottom = 0

    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
        cardPlayerChoose[i].style.zIndex = i
    }
}


// Rotating the Player's card
function transformThePlayerCard(selectedCard, rndNmbr) {
    switch(rndNmbr) {
        case 1:
            selectedCard.style.transform = `rotateZ(-70deg) rotateX(30deg) rotateY(60deg) scale(0.75, 0.75)`
        break

        case 2:
            selectedCard.style.transform = `rotateZ(-50deg) rotateX(50deg) rotateY(50deg) scale(0.75, 0.75)`
        break

        case 3:
            selectedCard.style.transform = `rotateZ(-20deg) rotateX(65deg) rotateY(20deg) scale(0.75, 0.75)`
        break

        case 4:
            selectedCard.style.transform = `rotateZ(20deg) rotateX(60deg) rotateY(-20deg) scale(0.75, 0.75)`
        break

        case 5:
            selectedCard.style.transform = `rotateZ(80deg) rotateX(-20deg) rotateY(60deg) scale(0.75, 0.75)`
        break
    }
}


// Formatting the Player's hand
function formattingCards(hereArray) {
    for(let i = 0; i < hereArray.length; ++ i) {
        hereArray[i].style.margin = '0'
        hereArray[i].style.transform = 'rotateZ(0deg)'
        hereArray[i].style.bottom = '7%';
        hereArray[i].style.zIndex = i
    }

    let setMarginRightAgain
    let setMarginLeftAgain
    let setBottomAgain
    let setRotZAgain

    setTimeout(function () {
        // If the hand has more than 15 cards, make the margin smaller
        if(hereArray.length > 15 && !(hereArray.length % 2)) {
            setMarginRightAgain = 1.5
        }
        else if(hereArray.length > 15 && (hereArray.length % 2)) {
            setMarginRightAgain = 3
        }
        else if(hereArray.length % 2) {
            setMarginRightAgain = 10
        }
        else {
            setMarginRightAgain = 5
        }

        setBottomAgain = 6.85
        setRotZAgain = 1

        // From middle to left
        for(let i = Math.floor(hereArray.length / 2) - 1; i >= 0; -- i) {
            hereArray[i].style.marginRight = setMarginRightAgain + '%'
            hereArray[i].style.transform = 'rotateZ(' + -setRotZAgain + 'deg)'
            hereArray[i].style.bottom = setBottomAgain + '%'
    
            if(hereArray.length > 15) {
                setRotZAgain += 1
                setMarginRightAgain += 3
                setBottomAgain -= 0.15 * (setRotZAgain - setRotZAgain * 0.65)
            }
            else {
                setRotZAgain += 1
                setMarginRightAgain += 10
                setBottomAgain -= 0.25
            }
        }
    
        if(hereArray.length > 15 && !(hereArray.length % 2)) {
            setMarginLeftAgain = 1.5
        }
        else if(hereArray.length > 15 && (hereArray.length % 2)) {
            setMarginLeftAgain = 3
        }
        else if(hereArray.length % 2) {
            setMarginLeftAgain = 10
        }
        else {
            setMarginLeftAgain = 5
        }
        
        setBottomAgain = 6.85
        setRotZAgain = 1
    
        // From middle to right
        for(let j = Math.round(hereArray.length / 2); j < hereArray.length; ++ j) {
            hereArray[j].style.marginLeft = setMarginLeftAgain + '%'
            hereArray[j].style.transform = 'rotateZ(' + setRotZAgain + 'deg)'
            hereArray[j].style.bottom = setBottomAgain + '%'
    

            if(hereArray.length > 15) {
                setRotZAgain += 1
                setMarginLeftAgain += 3
                setBottomAgain -= 0.15 * (setRotZAgain - setRotZAgain * 0.65)
            }
            else {
                setRotZAgain += 1
                setMarginLeftAgain += 10
                setBottomAgain -= 0.25
            }
        }
    }, 500)
}