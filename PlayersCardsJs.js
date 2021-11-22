// Player's Cards
let card1 = document.querySelector('#firstCard')
let card2 = document.querySelector('#secondCard')
let card3 = document.querySelector('#thirdCard')
let card4 = document.querySelector('#fourthCard')
let card5 = document.querySelector('#fifthCard')
let resetCard = document.querySelector('#resetGameCard')

// Test if player's cards are on board
let card1OnBoard = false
let card2OnBoard = false
let card3OnBoard = false
let card4OnBoard = false
let card5OnBoard = false

// Computer's Cards
let cardComp1 = document.querySelector('#firstCardComp')
let cardComp2 = document.querySelector('#secondCardComp')
let cardComp3 = document.querySelector('#thirdCardComp')
let cardComp4 = document.querySelector('#fourthCardComp')
let cardComp5 = document.querySelector('#fifthCardComp')
let cardCompChoose = [cardComp1, cardComp2, cardComp3, cardComp4, cardComp5]

// Test if computer's cards are on board
let card1CompOnBoard = false
let card2CompOnBoard = false
let card3CompOnBoard = false
let card4CompOnBoard = false

// Timer delay for computer
let computerDelay

// Some variables cards
let cardIndex = 0
let marginRandom


// Put the Cards on the board
card1.addEventListener('click', function putOnBoardCard1() {
    marginRandom = randomNumberInt(350, 400)
    card1OnBoard = true;

    card1.style.bottom = marginRandom + 'px'
    card1.style.marginRight = '0'
    card1.style.cursor = 'default'
    transformThePlayerCard(card1, randomNumberInt(1, 5))

    card1.removeEventListener('click', putOnBoardCard1)

    card1.style.zIndex = cardIndex
    ++ cardIndex

    computerDelay = randomNumberInt(250, 1000)
    setTimeout(putOnBoardCardComputer, computerDelay)
})

card2.addEventListener('click', function putOnBoardCard2() {
    marginRandom = randomNumberInt(350, 400)
    card2OnBoard = true;

    card2.style.bottom = marginRandom + 'px'
    card2.style.marginRight = '0'
    card2.style.cursor = 'default'
    transformThePlayerCard(card2, randomNumberInt(1, 5))

    card2.removeEventListener('click', putOnBoardCard2)

    card2.style.zIndex = cardIndex
    ++ cardIndex

    computerDelay = randomNumberInt(250, 1000)
    setTimeout(putOnBoardCardComputer, computerDelay)
})

card3.addEventListener('click', function putOnBoardCard3() {
    marginRandom = randomNumberInt(350, 400)
    card3OnBoard = true;

    card3.style.bottom = marginRandom + 'px'
    card3.style.marginRight = '0'
    card3.style.cursor = 'default'
    transformThePlayerCard(card3, randomNumberInt(1, 5))

    card3.removeEventListener('click', putOnBoardCard3)

    card3.style.zIndex = cardIndex
    ++ cardIndex

    computerDelay = randomNumberInt(250, 1000)
    setTimeout(putOnBoardCardComputer, computerDelay)
})

card4.addEventListener('click', function putOnBoardCard4() {
    marginRandom = randomNumberInt(350, 400)
    card4OnBoard = true;

    card4.style.bottom = marginRandom + 'px'
    card4.style.marginLeft = '0'
    card4.style.cursor = 'default'
    transformThePlayerCard(card4, randomNumberInt(1, 5))

    card4.removeEventListener('click', putOnBoardCard4)

    card4.style.zIndex = cardIndex
    ++ cardIndex

    computerDelay = randomNumberInt(250, 1000)
    setTimeout(putOnBoardCardComputer, computerDelay)
})

card5.addEventListener('click', function putOnBoardCard5() {
    marginRandom = randomNumberInt(350, 400)
    card5OnBoard = true;

    card5.style.bottom = marginRandom + 'px'
    card5.style.marginLeft = '0'
    card5.style.cursor = 'default'
    transformThePlayerCard(card5, randomNumberInt(1, 5))

    card5.removeEventListener('click', putOnBoardCard5)

    card5.style.zIndex = cardIndex
    ++ cardIndex

    computerDelay = randomNumberInt(250, 1000)
    setTimeout(putOnBoardCardComputer, computerDelay)
})


// Moving animation when hovering
// Hovering Card1
card1.addEventListener('mouseover', function () {
    if(!card2OnBoard) {
        card2.style.marginLeft = '50px'
    }

    if(!card3OnBoard) {
        card3.style.marginLeft = '50px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '250px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '450px'
    }
})

card1.addEventListener('mouseout', function () {
    if(!card2OnBoard) {
        card2.style.marginLeft = '0px'
    }

    if(!card3OnBoard) {
        card3.style.marginLeft = '0px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '200px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '400px'
    }
})

// Hovering Card2
card2.addEventListener('mouseover', function () {
    if(!card1OnBoard) {
        card1.style.marginRight = '450px'
    }

    if(!card3OnBoard) {
        card3.style.marginLeft = '50px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '250px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '450px'
    }
})

card2.addEventListener('mouseout', function () {
    if(!card1OnBoard) {
        card1.style.marginRight = '400px'
    }

    if(!card3OnBoard) {
        card3.style.marginLeft = '0px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '200px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '400px'
    }
})

// Hovering Card3
card3.addEventListener('mouseover', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '250px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '450px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '250px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '450px'
    }
})

card3.addEventListener('mouseout', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '200px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '400px'
    }

    if(!card4OnBoard) {
        card4.style.marginLeft = '200px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '400px'
    }
})

// Hovering Card4
card4.addEventListener('mouseover', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '250px'
    }
    
    if(!card3OnBoard) {
        card3.style.marginRight = '50px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '450px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '450px'
    }
})

card4.addEventListener('mouseout', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '200px'
    }
    
    if(!card3OnBoard) {
        card3.style.marginRight = '0px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '400px'
    }

    if(!card5OnBoard) {
        card5.style.marginLeft = '400px'
    }
})

// Hovering Card5
card5.addEventListener('mouseover', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '250px'
    }

    if(!card3OnBoard) {
        card3.style.marginRight = '50px'
    }

    if(!card4OnBoard) {
        card4.style.marginRight = '50px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '450px'
    }
})

card5.addEventListener('mouseout', function () {
    if(!card2OnBoard) {
        card2.style.marginRight = '200px'
    }

    if(!card3OnBoard) {
        card3.style.marginRight = '0px'
    }

    if(!card4OnBoard) {
        card4.style.marginRight = '0px'
    }

    if(!card1OnBoard) {
        card1.style.marginRight = '400px'
    }
})


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
