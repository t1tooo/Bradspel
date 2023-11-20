document.addEventListener('DOMContentLoaded', function () {
  displayPlayerResults();
});

function displayPlayerResults() {
  let existingData = localStorage.getItem('users');
  if (!existingData) {
    console.error('No player data found.');
    return;
  }

  existingData = JSON.parse(existingData);

  let sortedPlayers = Object.values(existingData)
    .filter(player => player.score !== undefined)
    .sort((a, b) => (b.score || 0) - (a.score || 0));

  sortedPlayers = sortedPlayers.slice(0, 10);

  let playersResultsTable = document.getElementById('playersResults');

  sortedPlayers.forEach(player => {
    let row = playersResultsTable.insertRow();
    let nameCell = row.insertCell(0);
    let scoreCell = row.insertCell(1);

    nameCell.style.paddingRight = '20vh';
    nameCell.style.marginBottom = '20vh';

    nameCell.textContent = player.name;
    scoreCell.textContent = player.score;
  });
}