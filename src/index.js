import './style.css';

const gameID = 'QgCExjsHIb82i7pF8unu';

const postScore = async (user, score) => {
  try {
    await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getScores = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`);
  const json = await response.json();
  return json.result;
};

const submitButton = document.getElementById('score-submit');
submitButton.addEventListener('click', () => {
  const name = document.getElementById('name');
  const score = document.getElementById('scoreinput');
  postScore(name.value, score.value);
  name.value = '';
  score.value = '';
});

const render = () => {
  const scores = getScores();
  const table = document.getElementById('score-list');
  table.innerHTML = '';
  scores.then((result) => {
    result.forEach((score) => {
      table.innerHTML += `<li>${score.user}: ${score.score}</li>`;
    });
  });
};

const refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', () => {
  render();
});

render();
