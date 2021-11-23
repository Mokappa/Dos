// Rotating the Computer's Card
function transformTheComputerCard(selectedCard, rndNmbr) {
    switch(rndNmbr) {
        case 1:
            selectedCard.style.transform = `rotateZ(-70deg) rotateX(30deg) rotateY(240deg) scale(0.75, 0.75)`
            selectedCard
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


function putOnBoardCardComputer() {
    let cardCompChooseIndex = randomNumberInt(0, cardCompChoose.length - 1)

    cardCompChoose[cardCompChooseIndex].style.top = marginRandom - 50 + 'px'
    cardCompChoose[cardCompChooseIndex].style.marginRight = '0'
    cardCompChoose[cardCompChooseIndex].style.marginLeft = '0'
    transformTheComputerCard(cardCompChoose[cardCompChooseIndex], randomNumberInt(1, 5))

    cardCompChoose[cardCompChooseIndex].style.zIndex = cardIndex
    ++ cardIndex

    const indexRemove = cardCompChoose.indexOf(cardCompChoose[cardCompChooseIndex])
    cardCompChoose.splice(indexRemove, 1)
}