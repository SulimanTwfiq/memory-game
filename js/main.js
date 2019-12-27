let cards = [
  { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
  { rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png" },
  { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
]
let cardsInPlay = []

const createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement("img")
    cardElement.setAttribute("src", "images/back.png")
    cardElement.setAttribute("data-id", i)
    cardElement.addEventListener("click", function() {
      flipCard(this)
    })
    document.getElementById("game-board").append(cardElement)
  }
}
const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
const flipCard = card => {
  const cardId = card.getAttribute("data-id")
  cardsInPlay.push(cards[cardId].rank)
  card.setAttribute("src", cards[cardId].cardImage)
  if (cardsInPlay.length === 2) {
    checkForMatch()
    cardsInPlay = []
  }
}
createBoard()

const restartGame = () => {
  const button = document.getElementById("reset")
  console.log(button)
  button.addEventListener("click", () => {
    cardsInPlay = []
    for (let i = 0; i < cards.length; i++) {
      cardElement.setAttribute("src", "images/back.png")
    }
  })
}
restartGame()
