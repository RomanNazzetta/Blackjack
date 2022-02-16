let firstCard = 2
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame (){
    rendertGame()
}

function rendertGame (){
    cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }    
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")

    let card = 5
    sum += card
    renderGame()
}


