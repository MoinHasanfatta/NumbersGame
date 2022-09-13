
let player = {
    name:"Moin",
    chips: 21
}
let cards = [] 
let sum = 0
let won = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("interact")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + " Num " + player.chips

console.log(cards)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 12) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11}
            else {
                return randomNumber
            }
        }
    

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    playGame()
}
function playGame() {
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to add a new number?";
    } else if (sum === 21) {
        message = "voww! You Won";
        won = true
    } else {
        message = "You are out of the Game!";
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true  && won === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    playGame()
    }
}





