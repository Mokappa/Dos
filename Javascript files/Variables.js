// Player's Cards
let playersHand = document.querySelector('.playersHand')
let cardPlayerChoose
let howManyPlayerCardsofcertainNumber
let those5Seconds
let manyCards

// Computer's Cards
let computersHand = document.querySelector('.computersHand')
let cardCompChoose
let howManyComputerCardsofcertainNumber
let computerDelay

// Draw Card
let whoDrawsCards
let drawCard = document.querySelector('#drawCardFirst')
let drawCardLast = document.querySelector('#drawCardLast')
let drawThisAmount
let battleIsNotOver

// Random Colors for the Cards
let randomColor = ['rgb(211, 0, 0), rgb(78, 0, 0)', 'rgb(0, 141, 12), rgb(0, 43, 4)', 'rgb(3, 75, 231), rgb(0, 21, 66)', 'rgb(255, 136, 0), rgb(88, 47, 0)']
let randomColorName = ['red', 'green', 'blue', 'orange']

// Last Played Card
let chosenValueLastPlayedCard

// Which Card should be on top
let cardIndex

// Audios Variables
let winSound = new Audio('./Sounds/WinSound.wav')
let loseSound = new Audio('./Sounds/LoseSound.mp3')
let flipCard = new Audio('./Sounds/CardFlip.mp3')
let selectSound = new Audio('./Sounds/SelectButton.wav')
let dosSound = new Audio('./Sounds/DosSound.mp3')

// End Game Variables
let endingScreen = document.querySelector('.endingScreen')
let textAnnouncer = document.querySelector('#announcerText')
let resetButton = document.querySelector('#buttonReset')
let mainMenuButton = document.querySelector('#buttonMainMenu')
let ifGameEnded

// Main Menu Variables
let card1 = document.querySelector('#cardStartMenu1')
let card2 = document.querySelector('#cardStartMenu2')
let card3 = document.querySelector('#cardStartMenu3')
let card4 = document.querySelector('#cardStartMenu4')
let loadingSreen = document.querySelector('.loadingScreen')
let startMenu = document.querySelector('.startMenuBackground')
let textAppearOnHover = document.querySelector('.titleAppear')
let textAppearParag = document.querySelector('.titleAppear p')

// Middle Arrow
let middleArrow = document.querySelector('#arrowMiddle')

// Creating the Cards
let howManyTimes


// Random Number Generator
function randomNumberInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}