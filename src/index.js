import _ from 'lodash';
import './style.css';
import { saveScore, fetchScores } from './localStorage';

const displayLeaderboard = (data) => {
  const leadersBoard = document.getElementById('leaderboard');
  leadersBoard.innerHTML = '';
  const table = document.createElement('table')
  const tbody = document.createElement('tbody');
  tbody.className = "tBody";

  const scores = data.result;

  scores.forEach((entry) => {
    const row = document.createElement('tr');
    row.innerHTML =` ${entry.user}: ${entry.score}`
    tbody.appendChild(row);
  });
  
  leadersBoard.appendChild(table);
  table.appendChild(tbody);
};

document.getElementById('refreshButton').addEventListener('click', async () => {
  const data = await fetchScores();
  displayLeaderboard(data);
});


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', async () => {
  const playerName = document.getElementById('nameInput').value;
  const score = parseInt(document.getElementById('scoreInput').value);
  await saveScore(playerName, score);
  document.getElementById('nameInput').value = '';
  document.getElementById('scoreInput').value = '';
  submitBtn.insertAdjacentHTML("afterend", '<span>*the information has been stored successfully</span>')
});

const data = await fetchScores();
displayLeaderboard(data);

