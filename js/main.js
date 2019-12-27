let cards = [
  { rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png" },
  { rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png" },
  { rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png" },
  { rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png" }
]
let cardsInPlay = []

const createBoard = () => {
  for (let i = 0; i < cards.length; i++) {
    let newListItem = document.createElement("img")
    console.log(newListItem)
    // Logic here
  }
}
const checkForMatch = () => {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
const flipCard = cardId => {
  console.log(cards[cardId].rank + "flipped queen")
  cardsInPlay.push(cards[cardId].rank)
  if (cardsInPlay.length === 2) {
    checkForMatch()
  }
}
flipCard(0)
flipCard(2)
createBoard()
