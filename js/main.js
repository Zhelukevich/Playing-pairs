import Card from './card.js'

function newGame(container, cardCount) {
  //Создать поле
  let cardNumberArray = [],
    cardArray = [],
    firstCard = null,
    secondCard = null;

  for (let i = 1; i <= cardCount / 2; i++) {
    cardNumberArray.push(i);
    cardNumberArray.push(i);
  }

  cardNumberArray = cardNumberArray.sort(() => Math.random() - 0.5);

  for (const cardNumber of cardNumberArray) {
    cardArray.push(new Card(container, cardNumber, flip))
  }

  //

  //Логика
  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number != secondCard.number) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }


    if (firstCard !== null && secondCard !== null) {
      if (firstCard.number == secondCard.number) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    if (document.querySelectorAll('.card.success').length == cardNumberArray.length) {
      //сброс игры
      alert('Победа!');
      container.innerHTML = '';
      cardNumberArray = [];
      cardArray = [];
      firstCard = null;
      secondCard = null;

      newGame(container, cardCount);
    }
  }


}

newGame(document.getElementById('game'), 16);


