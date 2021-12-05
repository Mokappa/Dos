// Player's Cards
let playersHand = document.querySelector('.playersHand')
let cardPlayerChoose = []
let howManyPlayerCardsofcertainNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let those5Seconds
let manyCards = false

// Computer's Cards
let computersHand = document.querySelector('.computersHand')
let cardCompChoose = []
let howManyComputerCardsofcertainNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Random Colors for the Cards
let randomColor = ['rgb(211, 0, 0), rgb(78, 0, 0)', 'rgb(0, 141, 12), rgb(0, 43, 4)', 'rgb(3, 75, 231), rgb(0, 21, 66)', 'rgb(255, 136, 0), rgb(88, 47, 0)']
let randomColorName = ['red', 'green', 'blue', 'orange']

// Last Played Card
let chosenValueLastPlayedCard = null

// Draw Amount of Cards
let drawThisAmount = 1
let battleIsNotOver = false

// Timer Delay for Computer
let computerDelay

// Which Card should be on top
let cardIndex = 0
let whoDrawsCards = 'player'

// Audios Variables
let winSound = new Audio('./Sounds/WinSound.wav')
let loseSound = new Audio('./Sounds/LoseSound.mp3')
let flipCard = new Audio('./Sounds/CardFlip.mp3')
let selectSound = new Audio('./Sounds/SelectButton.wav')
let dosSound = new Audio('./Sounds/DosSound.mp3')
winSound.volume = 0.1
loseSound.volume = 1
flipCard.volume = 0.1
selectSound.volume = 0.1
dosSound.volume = 0.1

// End Game Variables
let endingScreen = document.querySelector('.endingScreen')
let textAnnouncer = document.querySelector('#announcerText')
let resetButton = document.querySelector('#buttonReset')
let ifGameEnded = false

// Middle Arrow
let middleArrow = document.querySelector('#arrowMiddle')

// Random Number Generator
function randomNumberInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}