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

// Image Sources Player
let card1Image = document.querySelector('#firstCard img')
let card2Image = document.querySelector('#secondCard img')
let card3Image = document.querySelector('#thirdCard img')
let card4Image = document.querySelector('#fourthCard img')
let card5Image = document.querySelector('#fifthCard img')
let cardImagePlayerChoose = [card1Image, card2Image, card3Image, card4Image, card5Image]
let imagesSourcePlayer = ['./Images/Stone.png', './Images/Scissors.png', './Images/Paper.png', './Images/Spock.png', './Images/Lizard.png']


// Image Sources Computer
let cardComp1Image = document.querySelector('#firstCardCompBackInterior img')
let cardComp2Image = document.querySelector('#secondCardCompBackInterior img')
let cardComp3Image = document.querySelector('#thirdCardCompBackInterior img')
let cardComp4Image = document.querySelector('#fourthCardCompBackInterior img')
let cardComp5Image = document.querySelector('#fifthCardCompBackInterior img')
let cardImageComputerChoose = [cardComp1Image, cardComp2Image, cardComp3Image, cardComp4Image, cardComp5Image]
let imagesSourceComputer = ['./Images/Stone.png', './Images/Scissors.png', './Images/Paper.png', './Images/Spock.png', './Images/Lizard.png']

// Timer Delay for Computer
let computerDelay

// Which Card should be on top
let cardIndex = 0

// Test if the Player's Card is on the Board
let testIfCard1OnBoard = false
let testIfCard2OnBoard = false
let testIfCard3OnBoard = false
let testIfCard4OnBoard = false
let testIfCard5OnBoard = false

// The Chosen Value of the Card
let chosenValuePlayerCard

// Audios Variables
let winSound = new Audio('Sounds/WinSound.wav')
let loseSound = new Audio('Sounds/LoseSound.mp3')
let tieSound = new Audio('Sounds/TieSound.wav')
let flipCard = new Audio('Sounds/CardFlip.mp3')
winSound.volume = 0.1
loseSound.volume = 1
tieSound.volume = 0.1
flipCard.volume = 0.1


// Shuffle Everyone's Hand
// Player's Hand
for(let i = 0; i < cardImagePlayerChoose.length; ++ i) {
    cardImagePlayerChoose[i].style.height = '30%'

    let indexImgPlayer = randomNumberInt(0, imagesSourcePlayer.length - 1)
    cardImagePlayerChoose[i].src = imagesSourcePlayer[indexImgPlayer]
    imagesSourcePlayer.splice(indexImgPlayer, 1)
}

// Computer's hand
for(let i = 0; i < cardImageComputerChoose.length; ++ i) {
    cardImageComputerChoose[i].style.height = '30%'

    let indexImgComp = randomNumberInt(0, imagesSourceComputer.length - 1)
    cardImageComputerChoose[i].src = imagesSourceComputer[indexImgComp]
    imagesSourceComputer.splice(indexImgComp, 1)
}

// Adding the onClick + Hover function
// Card1
card1.addEventListener('mouseover', function () {
    if(!testIfCard1OnBoard) {
        hoverUp(card1, cardPlayerChoose)
    }
})
card1.addEventListener('mouseout', function () {
    if(!testIfCard1OnBoard) {
        hoverBack(card1, cardPlayerChoose, 2)
    }
}) 

card1.addEventListener('click', function functionToRemove() {
    flipCard.play()

    testIfCard1OnBoard = true
    chosenValuePlayerCard = card1Image

    putOnBoardCard(card1, functionToRemove)
})

// Card2
card2.addEventListener('mouseover', function () {
    if(!testIfCard2OnBoard) {
        hoverUp(card2, cardPlayerChoose)
    }
})
card2.addEventListener('mouseout', function () {
    if(!testIfCard2OnBoard) {
        hoverBack(card2, cardPlayerChoose, 2.5)
    }
}) 

card2.addEventListener('click', function functionToRemove2() {
    flipCard.play()

    testIfCard2OnBoard = true
    chosenValuePlayerCard = card2Image

    putOnBoardCard(card2, functionToRemove2)
})

// Card3
card3.addEventListener('mouseover', function () {
    if(!testIfCard3OnBoard) {
        hoverUp(card3, cardPlayerChoose)
    }
})
card3.addEventListener('mouseout', function () {
    if(!testIfCard3OnBoard) {
        hoverBack(card3, cardPlayerChoose, 3)
    }
}) 

card3.addEventListener('click', function functionToRemove3() {
    flipCard.play()

    testIfCard3OnBoard = true
    chosenValuePlayerCard = card3Image

    putOnBoardCard(card3, functionToRemove3)
})

// Card4
card4.addEventListener('mouseover', function () {
    if(!testIfCard4OnBoard) {
        hoverUp(card4, cardPlayerChoose)
    }
})
card4.addEventListener('mouseout', function () {
    if(!testIfCard4OnBoard) {
        hoverBack(card4, cardPlayerChoose, 2.5)
    }
}) 

card4.addEventListener('click', function functionToRemove4() {
    flipCard.play()

    testIfCard4OnBoard = true
    chosenValuePlayerCard = card4Image

    putOnBoardCard(card4, functionToRemove4)
})

// Card5
card5.addEventListener('mouseover', function () {
    if(!testIfCard5OnBoard) {
        hoverUp(card5, cardPlayerChoose)
    }
})
card5.addEventListener('mouseout', function () {
    if(!testIfCard5OnBoard) {
        hoverBack(card5, cardPlayerChoose, 2)
    }
})

card5.addEventListener('click', function functionToRemove5() {
    flipCard.play()

    testIfCard5OnBoard = true
    chosenValuePlayerCard = card5Image

    putOnBoardCard(card5, functionToRemove5)
})


// Putting the Player's Card on the Board
function putOnBoardCard(selectedCardBoard, removeFunction) {
    selectedCardBoard.removeEventListener('click', removeFunction)
    let bottomRandom = randomNumberInt(35, 40)

    selectedCardBoard.style.bottom = bottomRandom + '%'
    selectedCardBoard.style.margin = '0'
    selectedCardBoard.style.cursor = 'default'
    transformThePlayerCard(selectedCardBoard, randomNumberInt(1, 5))

    selectedCardBoard.style.zIndex = cardIndex
    ++ cardIndex

    // Remove the Card from the Player's Hand
    const indexReemove = cardPlayerChoose.indexOf(selectedCardBoard)
    cardPlayerChoose.splice(indexReemove, 1)

    // Formatting the Player's Hand
    formattingCards(cardPlayerChoose)

    // Disabling the Player's Hand
    for(let i = 0; i < cardPlayerChoose.length; ++ i) {
        cardPlayerChoose[i].style.filter = 'brightness(60%)'
        cardPlayerChoose[i].style.pointerEvents = 'none'
    }

    computerDelay = randomNumberInt(1000, 3000)
    setTimeout(putOnBoardCardComputer, computerDelay)

    // Enabling the Player's Hand
    setTimeout(function () {
        for(let i = 0; i < cardPlayerChoose.length; ++ i) {
            cardPlayerChoose[i].style.filter = 'brightness(100%)'
            cardPlayerChoose[i].style.pointerEvents = 'auto'
        }
    }, computerDelay + 1000)
}


// Hover Animation
function hoverUp(selectedCardHover, theArray) {
    selectedCardHover.style.bottom = '10%'
    selectedCardHover.style.zIndex = 999
}

function hoverBack(selectedCardHover, theArray, initialBottom) {
    for(let i = 0; i < theArray.length; ++ i) {
        theArray[i].style.zIndex = i
    }

    selectedCardHover.style.bottom = initialBottom + '%'
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


// Reset the Game
resetCard.addEventListener('click', function () {
    flipCard.play()

    setTimeout(function () {
        location.reload();
    }, 250)
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
        hereArray[i].style.bottom = '3%';
    }

    let setMarginRightAgain
    let setMarginLeftAgain
    let setBottomAgain
    let setRotZAgain

    setTimeout(function () {
        if(hereArray.length === 3) {
            setMarginRightAgain = 10
        }
        else {
            setMarginRightAgain = 5
        }

        setBottomAgain = 3
        setRotZAgain = 2

        for(let i = Math.floor(hereArray.length / 2) - 1; i >= 0; -- i) {
            hereArray[i].style.marginRight = setMarginRightAgain + '%'
            hereArray[i].style.transform = 'rotateZ(' + -setRotZAgain + 'deg)'
            hereArray[i].style.bottom = setBottomAgain + '%'
    
            setMarginRightAgain += 10
            ++ setRotZAgain
            setBottomAgain -= 0.5
        }
    
        if(hereArray.length === 3) {
            setMarginLeftAgain = 10
        }
        else {
            setMarginLeftAgain = 5
        }
        
        setBottomAgain = 3
        setRotZAgain = 2
    
        for(let j = Math.round(hereArray.length / 2); j < hereArray.length; ++ j) {
            hereArray[j].style.marginLeft = setMarginLeftAgain + '%'
            hereArray[j].style.transform = 'rotateZ(' + setRotZAgain + 'deg)'
            hereArray[j].style.bottom = setBottomAgain + '%'
    
            setMarginLeftAgain += 10
            ++ setRotZAgain
            setBottomAgain -= 0.5
        }
    }, 500)
}



let cubeInfo = document.querySelector('.cubeEverything')
let whatHappensOnClick = false

cubeInfo.addEventListener('click', function () {
    if(!whatHappensOnClick) {
        whatHappensOnClick = true

        cubeInfo.style.left = '15%'
        cubeInfo.style.transform = 'rotateY(360deg) rotateZ(360deg) translate(0, -50%)'

        cubeInfo.style.pointerEvents = 'none'

        setTimeout(function () {
            document.querySelector('#frontFace').style.transform = 'scale(10)'
            document.querySelector('#frontFace p').style.fontSize = '3px'
            document.querySelector('#frontFace p').innerHTML = 'Rock beats Scissors + Lizard<br>Paper beats Rock + Spock<br>Scissors beats Paper + Lizard<br>Lizard beats Paper + Spock<br>Spock beats Rock + Scissors'
            document.querySelector('#frontFace').style.boxShadow = '0 0 1px black'
            document.querySelector('#frontFace').style.borderRadius = '2px'

            cubeInfo.style.pointerEvents = 'auto'
        }, 800)
    }
    else {
        whatHappensOnClick = false

        document.querySelector('#frontFace').style.transform = 'scale(1)'

        cubeInfo.style.pointerEvents = 'none'

        setTimeout(function () {
            document.querySelector('#frontFace').style.boxShadow = ''
            document.querySelector('#frontFace').style.borderRadius = '0'
            document.querySelector('#frontFace p').style.fontSize = '30px'
            document.querySelector('#frontFace p').innerHTML = '?'
            cubeInfo.style.left = '0'
            cubeInfo.style.transform = 'rotateY(0deg) rotateZ(0deg) translate(-50%, -50%)'
        }, 300)

        setTimeout(function () {
            cubeInfo.style.pointerEvents = 'auto'
        }, 1000)
    }
})