let firstCard = 12
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?🙂")
} else if (sum === 21) {
    console.log("Whooo! You've got Blackjack!🥳")
    hasBlackjack = true
} else {
    console.log("You're out of the game!😭")
    isAlive = false
}

//CASH OUT
console.log(hasBlackjack)
console.log(isAlive)