import _ from 'lodash';
import './style.css';
import { saveScore, fetchScores } from './localStorage';

const displayLeaderboard = (data) => {
  const leadersBoard = document.getElementById('leaderboard');
  const table = document.createElement('table')
  leadersBoard.appendChild(table);
  const tbody = document.createElement('tbody');
  tbody.className = "tBody";
  table.innerHTML = '';

  const scores = data.result;

  scores.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML =` ${entry.user}: ${entry.score}`
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
};

document.getElementById('refreshButton').addEventListener('click', async () => {
  const data = await fetchScores();
  displayLeaderboard(data);
});


document.getElementById('submit').addEventListener('click', async () => {
  const playerName = document.getElementById('nameInput').value;
  const score = parseInt(document.getElementById('scoreInput').value);
  await saveScore(playerName, score);
  document.getElementById('nameInput').value = '';
  document.getElementById('scoreInput').value = '';
});

