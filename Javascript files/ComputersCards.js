// Putting the Computer's Card on Board
function testIfComputerHasCard() {
    // Play only if game is not ended
    if(!ifGameEnded) {
        if((chosenValueLastPlayedCard.getAttribute('data-numbercard') === '2' || chosenValueLastPlayedCard.getAttribute('data-numbercard') === '3') && battleIsNotOver) {
            let computerHasCards = false
            let computerSearchForNumber = false
            let i = 0

            let stopStop = setInterval(function () {
                if(i >= cardCompChoose.length) {
                    clearInterval(stopStop)

                    if(computerSearchForNumber) {
                        computerHasCards = true
                    }

                    if(computerHasCards) {
                        whoDrawsCards = 'player'

                        // Formatting the Computer's Hand
                        formattingCardsComputer(cardCompChoose)
                    }
                    else {
                        drawSomeCards()
                    }
            
                    // Enabling Player's Hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.filter = 'none'
                        cardPlayerChoose[i].style.pointerEvents = 'auto'
            
                        cardPlayerChoose[i].addEventListener('mouseover', hoverUp)
                        cardPlayerChoose[i].addEventListener('mouseout', hoverBack)
                    }
            
                    // Change Middle Arrow for Computer
                    middleArrow.style.fill = '#FFD900'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px #FFD900)'

                    // Add Draw Card Animation
                    drawCard.addEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'workingCard 1s infinite alternate'
                }
                else if(cardCompChoose[i].getAttribute('data-numbercard') === chosenValueLastPlayedCard.getAttribute('data-numbercard')) {
                    computerSearchForNumber = true
                    if(drawThisAmount === 1) {
                        drawThisAmount = 0
                    }
                    drawThisAmount += +cardCompChoose[i].getAttribute('data-numbercard')

                    putOnBoardCardComputer(i, cardCompChoose)
                    -- howManyComputerCardsofcertainNumber[+cardCompChoose[i].getAttribute('data-numbercard')]

                    -- i
                }

                ++ i
            }, 600)
        }
        else {
            let computerHasCards = false
            let computerSearchForNumber = false
            let i = 0

            let stopStop = setInterval(function () {
                if(i >= cardCompChoose.length) {
                    clearInterval(stopStop)

                    putCard4RunBack = false

                    if(computerSearchForNumber) {
                        computerHasCards = true
                    }

                    if(computerHasCards) {
                        whoDrawsCards = 'player'

                        // Formatting the Computer's Hand
                        formattingCardsComputer(cardCompChoose)
                    }
                    else {
                        drawSomeCards()
                    }
            
                    // Enabling Player's Hand
                    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
                        cardPlayerChoose[i].style.pointerEvents = 'auto'
                        cardPlayerChoose[i].style.filter = 'none'
            
                        cardPlayerChoose[i].addEventListener('mouseover', hoverUp)
                        cardPlayerChoose[i].addEventListener('mouseout', hoverBack)
                    }

                    // Change Middle Arrow for Computer
                    middleArrow.style.fill = '#FFD900'
                    middleArrow.style.filter = 'drop-shadow(0px 0px 30px #FFD900)'

                    // Add Draw Card Animation
                    drawCard.addEventListener('click', drawSomeCards)
                    drawCardLast.style.animation = 'workingCard 1s infinite alternate'
                }
                else if(cardCompChoose[i].getAttribute('data-numbercard') === chosenValueLastPlayedCard.getAttribute('data-numbercard')) {
                    computerSearchForNumber = true

                    if(cardCompChoose[i].getAttribute('data-numbercard') === '2' || cardCompChoose[i].getAttribute('data-numbercard') === '3') {
                        if(drawThisAmount === 1) {
                            drawThisAmount = 0
                        }

                        drawThisAmount += +cardCompChoose[i].getAttribute('data-numbercard')
                        battleIsNotOver = true
                    }

                    putOnBoardCardComputer(i, cardCompChoose)
                    -- howManyComputerCardsofcertainNumber[+cardCompChoose[i].getAttribute('data-numbercard')]

                    -- i
                }
                else if(cardCompChoose[i].getAttribute('data-colorcard') === chosenValueLastPlayedCard.getAttribute('data-colorcard') && !computerSearchForNumber) {
                    computerSearchForNumber = true

                    if(cardCompChoose[i].getAttribute('data-numbercard') === '2' || cardCompChoose[i].getAttribute('data-numbercard') === '3') {
                        if(drawThisAmount === 1) {
                            drawThisAmount = 0
                        }

                        drawThisAmount += +cardCompChoose[i].getAttribute('data-numbercard')
                        battleIsNotOver = true
                    }

                    putOnBoardCardComputer(i, cardCompChoose)
                    -- howManyComputerCardsofcertainNumber[+cardCompChoose[i].getAttribute('data-numbercard')]

                    i = -1
                }

                ++ i
            }, 600)
        }
    }
}


// Rotating the Computer's Card
function transformTheComputerCard(selectedCard, rndNmbr) {
    switch(rndNmbr) {
        case 1:
            selectedCard.style.transform = `rotateZ(-70deg) rotateX(30deg) rotateY(240deg) scale(0.75, 0.75)`
        break

        case 2:
            selectedCard.style.transform = `rotateZ(-50deg) rotateX(50deg) rotateY(230deg) scale(0.75, 0.75)`
        break

        case 3:
            selectedCard.style.transform = `rotateZ(-20deg) rotateX(65deg) rotateY(200deg) scale(0.75, 0.75)`
        break

        case 4:
            selectedCard.style.transform = `rotateZ(20deg) rotateX(60deg) rotateY(-200deg) scale(0.75, 0.75)`
        break

        case 5:
            selectedCard.style.transform = `rotateZ(80deg) rotateX(-20deg) rotateY(240deg) scale(0.75, 0.75)`
        break
    }
}


// Putting the Computer's Card on Board
function putOnBoardCardComputer(positionCardCompChosen, hereArray) {
    flipCard.currentTime = 0
    flipCard.play()
    let topRandom = randomNumberInt(35, 40)

    chosenValueLastPlayedCard = hereArray[positionCardCompChosen]
    
    // Going Up Animation Card Computer
    hereArray[positionCardCompChosen].style.top = '-3%'
    hereArray[positionCardCompChosen].style.zIndex = '-999'

    // Let the Player to draw Cards
    whoDrawsCards = 'player'

    // Putting Card Computer on Board
    setTimeout(function () {        
        hereArray[positionCardCompChosen].style.top = topRandom + '%'
        hereArray[positionCardCompChosen].style.marginRight = '0'
        hereArray[positionCardCompChosen].style.marginLeft = '0'
        transformTheComputerCard(hereArray[positionCardCompChosen], randomNumberInt(1, 5))
        
        hereArray[positionCardCompChosen].style.zIndex = cardIndex
        ++ cardIndex

        hereArray.splice(positionCardCompChosen, 1)

        // See if Computer has 2 Cards
        if(hereArray.length === 2) {
            dosSound.currentTime = 0
            dosSound.play()

            // Rotate Announcer Text
            let DosAnnouncer = document.querySelector('#dosAnnouncer')
           
            DosAnnouncer.style.fontSize = '400px'
            DosAnnouncer.animate([
                    { 
                        transform: 'translate(-50%, -50%) rotate(30deg)' 
                    },
                    {   
                        transform: 'translate(-50%, -50%) rotate(-30deg)'
                    },
                ], {
                    duration: 750
            })

            setTimeout(function () {
                DosAnnouncer.style.fontSize = '0'
            }, 500)
        }

        // See if the Computer won
        startGamePoints()
    }, 500)
}


// Formatting the Computers's Hand
function formattingCardsComputer(hereArray) {
    for(let i = 0; i < hereArray.length; ++ i) {
        hereArray[i].style.margin = '0'
        hereArray[i].style.transform = 'rotateZ(0deg) scale(0.6)'
        hereArray[i].style.top = '4.75%'
    }

    let setMarginRightAgain
    let setMarginLeftAgain
    let setTopAgain
    let setRotZAgain

    setTimeout(function () {
        if(hereArray.length > 15 && !(hereArray.length % 2)) {
            setMarginRightAgain = 1.5
        }
        else if(hereArray.length > 15 && (hereArray.length % 2)) {
            setMarginRightAgain = 3
        }
        else if(hereArray.length % 2) {
            setMarginRightAgain = 5
        }
        else {
            setMarginRightAgain = 2.5
        }

        setTopAgain = 4.5
        setRotZAgain = 1

        for(let i = Math.floor(hereArray.length / 2) - 1; i >= 0; -- i) {
            hereArray[i].style.marginRight = setMarginRightAgain + '%'
            hereArray[i].style.transform = 'rotateZ(' + setRotZAgain + 'deg) scale(0.6)'
            hereArray[i].style.top = setTopAgain + '%'
    
            if(hereArray.length > 15) {
                setRotZAgain += 1
                setMarginRightAgain += 3
                setTopAgain -= 0.15 * (setRotZAgain - setRotZAgain * 0.65)
            }
            else {
                setRotZAgain += 1
                setMarginRightAgain += 5
                setTopAgain -= 0.25
            }
        }
    
        if(hereArray.length > 15 && !(hereArray.length % 2)) {
            setMarginLeftAgain = 1.5
        }
        else if(hereArray.length > 15 && (hereArray.length % 2)) {
            setMarginLeftAgain = 3
        }
        else if(hereArray.length % 2) {
            setMarginLeftAgain = 5
        }
        else {
            setMarginLeftAgain = 2.5
        }
        
        setTopAgain = 4.5
        setRotZAgain = 1
    
        for(let j = Math.round(hereArray.length / 2); j < hereArray.length; ++ j) {
            hereArray[j].style.marginLeft = setMarginLeftAgain + '%'
            hereArray[j].style.transform = 'rotateZ(' + -setRotZAgain + 'deg) scale(0.6)'
            hereArray[j].style.top = setTopAgain + '%'
    

            if(hereArray.length > 15) {
                setRotZAgain += 1
                setMarginLeftAgain += 3
                setTopAgain -= 0.15 * (setRotZAgain - setRotZAgain * 0.65)
            }
            else {
                setRotZAgain += 1
                setMarginLeftAgain += 5
                setTopAgain -= 0.25
            }
        }
    }, 500)
}