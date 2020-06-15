const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard !== 'spade'){
  //Math.floor(Math.random() * 4) will give us a random number from 0 to 3
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
