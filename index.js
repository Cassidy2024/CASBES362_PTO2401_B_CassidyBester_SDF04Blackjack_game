
let player = {
    name: "Cass",
    chips: 200,
}
let cards = []  //cards variable is empty because random cards need to be selected which is found in the startGame function on line 30
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el") //these Ids are found in the HTML document

playerEl.textContent = player.name + ": $" + player.chips //.textContent allows for a specified variable or string to appear on the UI

function getRandomCard() {   //using the if conditional was one of the most challenging things because I was not too sure of the logic that needed to be used, so extra time was spent on this.
    let randomNumber = Math.floor( Math.random()*13 ) + 1 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) { // i represents count and ++ represents +=1, this was interesting to learn because it is less typing making the code look a bit neater 
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum //messages will appear when conditionals are met. This was also one of the easier lines of code as it is straight forward.
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() { //the AND operator was what I found easier to do as it is straight forward.This line of code sets the player up to start the game, "hasBlackJack" is false because the player does not start the game having already gotten blackjack.

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
