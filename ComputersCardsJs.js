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
    
    // Going Up Animation Card Computer
    cardCompChoose[cardCompChooseIndex].style.top = '-3%'
    cardCompChoose[cardCompChooseIndex].style.zIndex = '-999'

    // Putting Card Computer on Board
    setTimeout(function () {
        cardCompChoose[cardCompChooseIndex].style.top = topRandom + '%'

        cardCompChoose[cardCompChooseIndex].style.marginRight = '0'
        cardCompChoose[cardCompChooseIndex].style.marginLeft = '0'
        transformTheComputerCard(cardCompChoose[cardCompChooseIndex], randomNumberInt(1, 5))
        
        cardCompChoose[cardCompChooseIndex].style.zIndex = cardIndex
        ++ cardIndex
        
        startGamePoints(chosenValuePlayerCard, cardImageComputerChoose[cardCompChooseIndex])
        
        cardCompChoose.splice(cardCompChooseIndex, 1)
        cardImageComputerChoose.splice(cardCompChooseIndex, 1)

        formattingCardsComputer(cardCompChoose)
    }, 500)
}

function formattingCardsComputer(hereTheArray) {
    for(let i = 0; i < hereTheArray.length; ++ i) {
        hereTheArray[i].style.margin = '0'
        hereTheArray[i].style.transform = 'rotateZ(0deg) scale(0.6)'
        hereTheArray[i].style.top = '4.75%';
    }

    let setMarginRightAgain
    let setMarginLeftAgain
    let setTopAgain
    let setRotZAgain

    setTimeout(function () {
        if(hereTheArray.length === 3) {
            setMarginRightAgain = 6.25
        }
        else {
            setMarginRightAgain = 3.25
        }

        setTopAgain = 4.5
        setRotZAgain = 1

        for(let i = Math.floor(hereTheArray.length / 2) - 1; i >= 0; -- i) {
            hereTheArray[i].style.marginRight = setMarginRightAgain + '%'
            hereTheArray[i].style.transform = 'rotateZ(' + setRotZAgain + 'deg) scale(0.6)'
            hereTheArray[i].style.top = setTopAgain + '%'
    
            setMarginRightAgain += 6.25
            ++ setRotZAgain
            setTopAgain -= 0.25
        }
    
        if(hereTheArray.length === 3) {
            setMarginLeftAgain = 6.25
        }
        else {
            setMarginLeftAgain = 3.25
        }

        setTopAgain = 4.5
        setRotZAgain = 1
    
        for(let j = Math.round(hereTheArray.length / 2); j < hereTheArray.length; ++ j) {
            hereTheArray[j].style.marginLeft = setMarginLeftAgain + '%'
            hereTheArray[j].style.transform = 'rotateZ(' + -setRotZAgain + 'deg) scale(0.6)'
            hereTheArray[j].style.top = setTopAgain + '%'
    
            setMarginLeftAgain += 6.25
            ++ setRotZAgain
            setTopAgain -= 0.25
        }
    }, 500)
}