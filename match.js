document.addEventListener('DOMContentLoaded', function () {
  displayMatchHistory();
});

function displayMatchHistory() {
  let matchHistory = localStorage.getItem('matchHistory');
  if (!matchHistory) {
    console.error('No match history found.');
    return;
  }

  matchHistory = JSON.parse(matchHistory);
  let matchHistoryTable = document.getElementById('matchHistoryBody');

  matchHistory = matchHistory.reverse().slice(0, 10);

  matchHistory.forEach(match => {
    let row = matchHistoryTable.insertRow();
    row.insertCell(0).textContent = match.playerX;
    row.insertCell(1).textContent = match.playerO;
    row.insertCell(2).textContent = match.moveCount;
    row.insertCell(3).textContent = match.winner;
    row.insertCell(4).textContent = match.timestamp;

  });
}