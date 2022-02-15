let firstCard = 20
let secondCard = 8
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card?🙂")
} else if (sum === 21) {
    console.log("Whooo! You've got Blackjack!🥳")
} else {
    console.log("You're out of the game!😭")
}