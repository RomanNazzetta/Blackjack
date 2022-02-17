// let age = 10

// if (age < 100){
//     console.log("Not elegible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }
// --------------------------------------------------
// let mySelf [ Roman, 35, true]
// --------------------------------------------------
// let cardes = [7, 4]
// cardes.push(6)

// console.log(cardes)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

// for (let i =10; i < 101; i+=10){
//     console.log(i)
// }


// let cartas = [3,6,9]

// for (let i = 0; i< cartas.length; i += 1){
//     console.log(cartas[i])
// }

// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// function totalRaceTime(){
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()

// console.log(totalTime)




// console.log(randomNumber)

function rollDice(){
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log(rollDice())