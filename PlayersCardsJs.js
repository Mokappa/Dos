// Player's Cards
let card1 = document.querySelector('#firstCard')
let card2 = document.querySelector('#secondCard')
let card3 = document.querySelector('#thirdCard')
let card4 = document.querySelector('#fourthCard')
let card5 = document.querySelector('#fifthCard')
let cardPlayerChoose = [card1, card2, card3, card4, card5]

// Computer's Cards
let cardComp1 = document.querySelector('#firstCardComp')
let cardComp2 = document.querySelector('#secondCardComp')
let cardComp3 = document.querySelector('#thirdCardComp')
let cardComp4 = document.querySelector('#fourthCardComp')
let cardComp5 = document.querySelector('#fifthCardComp')
let cardCompChoose = [cardComp1, cardComp2, cardComp3, cardComp4, cardComp5]

// Reset Card
let resetCard = document.querySelector('#resetGameCard')

// Timer delay for computer
let computerDelay

// Some variables cards
let cardIndex = 0
let marginRandom


// Adding the onclick + hover function
// Card1
function OsaMearga() {
    hoverToRight(card1, cardPlayerChoose)
}

function OsaMearga2() {
    hoverBack(card1, cardPlayerChoose)
}

card1.addEventListener('mouseover', OsaMearga)
card1.addEventListener('mouseout', OsaMearga2) 

card1.addEventListener('click', function functionToRemove() {
    card1.removeEventListener('mouseover', OsaMearga)
    card1.removeEventListener('mouseout', OsaMearga2)

    putOnBoardCard(card1, functionToRemove)
})

// Card2
function OsaMearga3() {
    hoverToRight(card2, cardPlayerChoose)
}

function OsaMearga4() {
    hoverBack(card2, cardPlayerChoose)
}

card2.addEventListener('mouseover', OsaMearga3)
card2.addEventListener('mouseout', OsaMearga4) 

card2.addEventListener('click', function functionToRemove2() {
    card2.removeEventListener('mouseover', OsaMearga3)
    card2.removeEventListener('mouseout', OsaMearga4)

    putOnBoardCard(card2, functionToRemove2)
})

// Card3
function OsaMearga5() {
    hoverToRight(card3, cardPlayerChoose)
}

function OsaMearga6() {
    hoverBack(card3, cardPlayerChoose)
}

card3.addEventListener('mouseover', OsaMearga5)
card3.addEventListener('mouseout', OsaMearga6) 

card3.addEventListener('click', function functionToRemove3() {
    card3.removeEventListener('mouseover', OsaMearga5)
    card3.removeEventListener('mouseout', OsaMearga6)
    putOnBoardCard(card3, functionToRemove3)
})

// Card4
function OsaMearga7() {
    hoverToRight(card4, cardPlayerChoose)
}

function OsaMearga8() {
    hoverBack(card4, cardPlayerChoose)
}

card4.addEventListener('mouseover', OsaMearga7)
card4.addEventListener('mouseout', OsaMearga8) 

card4.addEventListener('click', function functionToRemove4() {
    card4.removeEventListener('mouseover', OsaMearga7)
    card4.removeEventListener('mouseout', OsaMearga8)
    putOnBoardCard(card4, functionToRemove4)
})

// Card5
function OsaMearga9() {
    hoverToRight(card5, cardPlayerChoose)
}

function OsaMearga10() {
    hoverBack(card5, cardPlayerChoose)
}

card5.addEventListener('mouseover', OsaMearga9)
card5.addEventListener('mouseout', OsaMearga10) 

card5.addEventListener('click', function functionToRemove5() {
    card5.removeEventListener('mouseover', OsaMearga9)
    card5.removeEventListener('mouseout', OsaMearga10)
    putOnBoardCard(card5, functionToRemove5)
})


// Putting the card on board
function putOnBoardCard(selectedCardBoard, removeFunction) {
    selectedCardBoard.removeEventListener('click', removeFunction)
    marginRandom = randomNumberInt(350, 400)

    selectedCardBoard.style.bottom = marginRandom + 'px'
    selectedCardBoard.style.margin = '0'
    selectedCardBoard.style.cursor = 'default'
    transformThePlayerCard(selectedCardBoard, randomNumberInt(1, 5))

    selectedCardBoard.style.zIndex = cardIndex
    ++ cardIndex

    // Remove the card from the player's hand
    const indexReemove = cardPlayerChoose.indexOf(selectedCardBoard)
    cardPlayerChoose.splice(indexReemove, 1)

    // Formatting the player's hand
    formattingCards(cardPlayerChoose)

    // Disabling the player's hand
    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
        cardPlayerChoose[i].style.filter = 'brightness(60%)'
        cardPlayerChoose[i].style.pointerEvents = 'none'
    }

    computerDelay = randomNumberInt(1000, 1500)
    setTimeout(putOnBoardCardComputer, computerDelay)

    // Enabling the player's hand
    setTimeout(function () {
        for(let i = 0; i < cardPlayerChoose.length; ++ i) {
            cardPlayerChoose[i].style.filter = 'brightness(100%)'
            cardPlayerChoose[i].style.pointerEvents = 'auto'
        }
    }, computerDelay + 1000)
}


// Hover Animation
function hoverToRight(selectedCardHover, theArray) {
    selectedCardHover.style.bottom = '100px'
    selectedCardHover.style.zIndex = 999
}

function hoverBack(selectedCardHover, theArray) {
    if(selectedCardHover === card1) {
        selectedCardHover.style.bottom = '17px'
        selectedCardHover.style.zIndex = 1
    }
    else if(selectedCardHover === card2) {
        selectedCardHover.style.bottom = '20px'
        selectedCardHover.style.zIndex = 2
    }
    else if(selectedCardHover === card3) {
        selectedCardHover.style.bottom = '23px'
        selectedCardHover.style.zIndex = 3
    }
    else if(selectedCardHover === card4) {
        selectedCardHover.style.bottom = '20px'
        selectedCardHover.style.zIndex = 4
    }
    else if(selectedCardHover === card5) {
        selectedCardHover.style.bottom = '17px'
        selectedCardHover.style.zIndex = 5
    }
}


// Rotating the Player's Card
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


// Reset the game
resetCard.addEventListener('click', function () {
    location.reload();
})


// Random Number Generator
function randomNumberInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}


// Formatting the Player's Hand
function formattingCards(hereArray) {
    for(let i = 0; i < hereArray.length; ++ i) {
        hereArray[i].style.margin = '0'
        hereArray[i].style.transform = 'rotateZ(0deg)'
        hereArray[i].style.bottom = '23px';
    }

    let setMarginRightAgain
    let setMarginLeftAgain
    let setBottomAgain
    let setRotZAgain

    setTimeout(function () {
        if(hereArray.length === 3) {
            setMarginRightAgain = 200 
        }
        else {
            setMarginRightAgain = 100 
        }
        setBottomAgain = 23
        setRotZAgain = 2


        for(let i = Math.floor(hereArray.length / 2) - 1; i >= 0; -- i) {
            console.log(i)
            hereArray[i].style.marginRight = setMarginRightAgain + 'px'
            hereArray[i].style.transform = 'rotateZ(' + -setRotZAgain + 'deg)'
            hereArray[i].style.bottom = setBottomAgain + 'px'
    
            setMarginRightAgain += 200
            ++ setRotZAgain
            setBottomAgain -= 3
        }
    
        if(hereArray.length === 3) {
            setMarginLeftAgain = 200 
        }
        else {
            setMarginLeftAgain = 100 
        }
        setBottomAgain = 23
        setRotZAgain = 2
    
        for(let j = Math.round(hereArray.length / 2); j < hereArray.length; ++ j) {
            hereArray[j].style.marginLeft = setMarginLeftAgain + 'px'
            hereArray[j].style.transform = 'rotateZ(' + setRotZAgain + 'deg)'
            hereArray[j].style.bottom = setBottomAgain + 'px'
    
            setMarginLeftAgain += 200
            ++ setRotZAgain
            setBottomAgain -= 3
        }
    }, 500)
}