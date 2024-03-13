import { Game } from './game.js';
import { flipCard } from './card.js';
import { gsap } from 'gsap'; 


    function animateElement() {
    const element = document.getElementById('animated-element');
    gsap.to(element, { duration: 1, x: 100, y: 100 });


    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.addEventListener('click', flipCard));


    function restartGame() {
        
        window.location.reload(); 
    }


    const restartButton = document.getElementById('restart-button');
    if (restartButton) {
        restartButton.addEventListener('click', restartGame);
    } else {
        console.error("Restart button not found!");
    }
    
};