let alertMessage = false;

function savePlayerBtn() {
  event.preventDefault();

  let playerXName = document.getElementById('userNameX').value;
  let playerOName = document.getElementById('userNameO').value;

  if (!playerXName || !playerOName) {
    if (!alertMessage) {
      alert('You have to enter both names!');
    }
    return;
  }

  if (playerXName.length > 10 || playerOName.length > 10) {
    if (!alertMessage) {
      alert("Name can't be longer than 10 characters!");
    }
    return;
  }

  playerXName = playerXName;
  playerOName = playerOName;

  let existingData = localStorage.getItem('users');

  if (!existingData) {
    existingData = {};
  } else {
    existingData = JSON.parse(existingData);
  }

  if (!existingData[playerXName]) {
    existingData[playerXName] = { name: playerXName, score: 0 };
  }

  if (!existingData[playerOName]) {
    existingData[playerOName] = { name: playerOName, score: 0 };
  }

  localStorage.setItem('users', JSON.stringify(existingData));

  console.log('Data saved successfully:', existingData);

  localStorage.setItem('playerXName', playerXName);
  localStorage.setItem('playerOName', playerOName);

  window.location.href = './game.html';
}

document.getElementById('jsonbtn').addEventListener('click', savePlayerBtn);

savePlayerBtn();