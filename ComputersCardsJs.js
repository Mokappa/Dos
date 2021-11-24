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
function putOnBoardCardComputer() {
    let cardCompChooseIndex = randomNumberInt(0, cardCompChoose.length - 1)
    let topRandom = randomNumberInt(35, 40)

    cardCompChoose[cardCompChooseIndex].style.top = topRandom + '%'
    cardCompChoose[cardCompChooseIndex].style.marginRight = '0'
    cardCompChoose[cardCompChooseIndex].style.marginLeft = '0'
    transformTheComputerCard(cardCompChoose[cardCompChooseIndex], randomNumberInt(1, 5))

    cardCompChoose[cardCompChooseIndex].style.zIndex = cardIndex
    ++ cardIndex

    startGamePoints(chosenValuePlayerCard, cardImageComputerChoose[cardCompChooseIndex])

    cardCompChoose.splice(cardCompChooseIndex, 1)
    cardImageComputerChoose.splice(cardCompChooseIndex, 1)
}