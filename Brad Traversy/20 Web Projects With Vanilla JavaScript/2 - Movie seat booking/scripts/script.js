'use strict';

window.addEventListener('load', () => {
  console.log('the page is fully loaded!');

  // Variables
  const main = document.querySelector('main');
  const selectedOutput = document.querySelector('.output > span:first-of-type');
  const priceOutput = document.querySelector('.output > span:last-of-type');
  let seatsCounter = 0;
  let price = 10;


  // Event listeners
  main.addEventListener('click', (e) => {
    if (e.target.classList == 'seat') {
      e.target.classList.add('selectedChair');
      seatsCounter++;
      selectedOutput.innerText = seatsCounter;
      priceOutput.innerText = price * seatsCounter;
    }
  });

  // Create a number of seats
  const createSeats = () => {
    for (let numberOfChairs = 150; numberOfChairs >= 0; numberOfChairs--) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      main.appendChild(seat);
    }
  };

  createSeats();
}); // End of Load eventlistener
