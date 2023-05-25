const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'neerCzA0Eoyfj9E1dI2J';

const fetchScores = async () => {
  try {
    const response = await fetch(`${apiURL}/games/${gameId}/scores`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
};

const saveScore = async (playerName, score) => {
  try {
    const response = await fetch(`${apiURL}/games/${gameId}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gameID: gameId, user: playerName, score }),
    });

    console.log('Score saved successfully!');
  } catch (error) {
    console.error('Error saving the score:', error);
  }
};

export{ saveScore, fetchScores}