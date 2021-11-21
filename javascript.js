// Player's Cards
let card1 = document.querySelector('#firstCard')
let card2 = document.querySelector('#secondCard')
let card3 = document.querySelector('#thirdCard')
let card4 = document.querySelector('#fourthCard')
let card5 = document.querySelector('#fifthCard')
let resetCard = document.querySelector('#resetGameCard')


// Some variables cards
let cardIndex = 0
let marginRandom
let chooseTheStyle


// Test if cards are on board
let card1OnBoard = false
let card2OnBoard = false
let card3OnBoard = false
let card4OnBoard = false
let card5OnBoard = false


// The Cards
card1.addEventListener('click', function terogceva() {
    marginRandom = randomNumberInt(350, 400)
    chooseTheStyle = randomNumberInt(1, 5)
    card1OnBoard = true;

    card1.style.bottom = marginRandom + 'px'
    card1.style.cursor = 'default'
    card1.style.marginRight = '0'
    transformTheCard(card1, chooseTheStyle)

    card1.removeEventListener('click', terogceva)

    card1.style.zIndex = cardIndex
    ++ cardIndex
})

card2.addEventListener('click', function () {
    marginRandom = randomNumberInt(350, 400)
    chooseTheStyle = randomNumberInt(1, 5)
    card2OnBoard = true;

    card2.style.bottom = marginRandom + 'px'
    card2.style.marginRight = '0'
    transformTheCard(card2, chooseTheStyle)

    card2.style.zIndex = cardIndex
    ++ cardIndex
})

card3.addEventListener('click', function () {
    marginRandom = randomNumberInt(350, 400)
    chooseTheStyle = randomNumberInt(1, 5)
    card3OnBoard = true;

    card3.style.bottom = marginRandom + 'px'
    card3.style.marginRight = '0'
    transformTheCard(card3, chooseTheStyle)

    card3.style.zIndex = cardIndex
    ++ cardIndex
})

card4.addEventListener('click', function () {
    marginRandom = randomNumberInt(350, 400)
    chooseTheStyle = randomNumberInt(1, 5)
    card4OnBoard = true;

    card4.style.bottom = marginRandom + 'px'
    card4.style.marginLeft = '0'
    transformTheCard(card4, chooseTheStyle)

    card4.style.zIndex = cardIndex
    ++ cardIndex
})

card5.addEventListener('click', function () {
    marginRandom = randomNumberInt(350, 400)
    chooseTheStyle = randomNumberInt(1, 5)
    card5OnBoard = true;

    card5.style.bottom = marginRandom + 'px'
    card5.style.marginLeft = '0'
    transformTheCard(card5, chooseTheStyle)

    card5.style.zIndex = cardIndex
    ++ cardIndex
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






// Random Number Generator
function randomNumberInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}


// Rotating the card
function transformTheCard(selectedCard, rndNmbr) {
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