export class Game {
    constructor(totalPairs, imageSources) {
        this.totalPairs = totalPairs;
        this.imageSources = imageSources;
        this.cards = [];
        this.flippedCards = [];
        this.matchedCards = [];
        this.board = document.createElement('board');
        
    }
     
        start() {
            this.createCards();
            this.renderBoard();
            this.addCardListeners();
        }
    
        
  

        renderBoard() {
            this.board.innerHTML = '';
            this.cards.forEach(card => {
                this.board.appendChild(card);
            });
        }
    

        addCardListeners() {
            this.cards.forEach(card => {
                card.addEventListener('click', () => this.flipCard(card));
            });
        }
    
        

        checkForMatch() {
            const [card1, card2] = this.flippedCards;
            if (card1.dataset.id === card2.dataset.id) {
                this.matchedCards.push(card1, card2);
                this.flippedCards = [];
                if (this.matchedCards.length === this.cards.length) {
                    this.handleGameCompletion();
                }
            } else {
                setTimeout(() => {
                    this.unflipCards(card1, card2);
                }, 1000);
            }
        }
    
   
        unflipCards(card1, card2) {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            this.flippedCards = [];
        }
    

        
    }

    const cards = document.querySelectorAll('.card');
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedCards = 0;

    function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip');
    this.querySelector('.front-face').style.display = 'none';
    this.querySelector('.back-face').style.display = 'block';

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
        lockBoard = true;
        checkForMatch();
    }
}

function checkForMatch() {
    let isMatch = firstCard.dataset.id === secondCard.dataset.id;
    isMatch ? disableCards() : unflipCards();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard.querySelector('.front-face').style.display = 'block';
        secondCard.querySelector('.front-face').style.display = 'block';
        firstCard.querySelector('.back-face').style.display = 'none';
        secondCard.querySelector('.back-face').style.display = 'none';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));




const game = new Game(8, ['images/image1.svg', 'images/image2.svg', 'images/image3.svg', 'images/image4.svg', 'images/image5.svg', 'images/image6.svg', 'images/image7.svg', 'images/image8.svg']);
game.start();