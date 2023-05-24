function setDataToLocalStorage (obj) {
    localStorage.setItem('leadersData', JSON.stringify(obj))
    
}

const displayLeaderboard = (data) => {
  const leaderboardElement = document.getElementById('leaderboard');
  leaderboardElement.innerHTML = '';

  const table = document.createElement('table');
  data.forEach((object) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${object.name}: ${object.score}</td>`;
    table.appendChild(row);
  });

  leaderboardElement.appendChild(table);
};

export {setDataToLocalStorage, displayLeaderboard};