let player1Points = parseInt(localStorage.getItem('player1Points')) || 0; // Get Player 1 points
document.getElementById('player1-points').innerText = player1Points; // Update Points display

// Apply the skin when returning from the shop
window.onload = function() {
  const selectedSkin = localStorage.getItem('player1Skin');
  
  if (selectedSkin) {
    document.getElementById('player1-dice-1').style.backgroundColor = selectedSkin;
    document.getElementById('player1-dice-2').style.backgroundColor = selectedSkin;
  }
};

document.getElementById('roll-btn').addEventListener('click', function() {
  let player1Dice1 = Math.floor(Math.random() * 6) + 1;
  let player1Dice2 = Math.floor(Math.random() * 6) + 1;
  let player2Dice1 = Math.floor(Math.random() * 6) + 1;
  let player2Dice2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById('player1-dice-1').innerHTML = player1Dice1;
  document.getElementById('player1-dice-2').innerHTML = player1Dice2;
  document.getElementById('player2-dice-1').innerHTML = player2Dice1;
  document.getElementById('player2-dice-2').innerHTML = player2Dice2;

  const player1Dice1El = document.getElementById('player1-dice-1');
  const player1Dice2El = document.getElementById('player1-dice-2');
  const player2Dice1El = document.getElementById('player2-dice-1');
  const player2Dice2El = document.getElementById('player2-dice-2');

  player1Dice1El.classList.remove('rolling');
  player1Dice2El.classList.remove('rolling');
  player2Dice1El.classList.remove('rolling');
  player2Dice2El.classList.remove('rolling');

  void player1Dice1El.offsetWidth;
  void player1Dice2El.offsetWidth;
  void player2Dice1El.offsetWidth;
  void player2Dice2El.offsetWidth;

  player1Dice1El.classList.add('rolling');
  player1Dice2El.classList.add('rolling');
  player2Dice1El.classList.add('rolling');
  player2Dice2El.classList.add('rolling');

  let player1Total = player1Dice1 + player1Dice2;
  let player2Total = player2Dice1 + player2Dice2;

  let resultText = '';
  if (player1Total > player2Total) {
    resultText = 'Player 1 Wins!';
    player1Points += 10; // Reward points for winning
  } else if (player2Total > player1Total) {
    resultText = 'Player 2 Wins!';
  } else {
    resultText = 'It\'s a Draw! Roll again.';
  }

  document.getElementById('result').innerText = resultText;
  document.getElementById('player1-points').innerText = player1Points; // Update points after game
  localStorage.setItem('player1Points', player1Points); // Store updated points
});
