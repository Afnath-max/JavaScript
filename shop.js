let player1Points = parseInt(localStorage.getItem('player1Points')) || 0; // Retrieve points from localStorage

// Update points on the game page when coming from the shop
document.getElementById('red-skin').addEventListener('click', function() {
  if (player1Points >= 50) {
    player1Points -= 50; // Deduct points
    localStorage.setItem('player1Points', player1Points); // Store updated points
    localStorage.setItem('player1Skin', 'red'); // Store the selected skin
    window.location.href = 'index.html'; // Redirect to the game
  } else {
    alert('Not enough points!');
  }
});

document.getElementById('blue-skin').addEventListener('click', function() {
  if (player1Points >= 75) {
    player1Points -= 75;
    localStorage.setItem('player1Points', player1Points);
    localStorage.setItem('player1Skin', 'blue');
    window.location.href = 'index.html';
  } else {
    alert('Not enough points!');
  }
});

document.getElementById('green-skin').addEventListener('click', function() {
  if (player1Points >= 100) {
    player1Points -= 100;
    localStorage.setItem('player1Points', player1Points);
    localStorage.setItem('player1Skin', 'green');
    window.location.href = 'index.html';
  } else {
    alert('Not enough points!');
  }
});
