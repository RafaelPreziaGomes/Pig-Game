'use strict';

// rolling the dice

//  when the butonn roll dice is clicked
//      add a  event handler
//          select the button
const rollDice = document.querySelector('.btn--roll');
rollDice.addEventListener('click', function () {
  //    generate a random number between 1 to 6
  var randomNum = Math.floor(Math.random() * 6 + 1);
  //   turn that number into a string
  randomNum = String(randomNum);
  // create a filepath with that generated randomNum
  let filePath = 'dice-' + randomNum + '.png';
  // select current dice image
  document.querySelector('.dice').src = filePath;

  if (Number(randomNum) != 1) {
    //  get the value of the randomGeneratedNumber
    //  select current score
    const current = document.querySelector('.current-score');
    //    change current score value to randomGeneratedNumber
    current.value = randomNum;
    console.log(current);
  } else {
  }
});
