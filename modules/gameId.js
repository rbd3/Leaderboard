const gameId = () => {
  fetch(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games",
      {
      method: 'POST',
      body: JSON.stringify({
      name: 'Project Game',
      }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )
      .then((response) => response.json())
      .then((json) => {
        const gameId = json.result.match(/Game with ID: (\w+) added/)[1];
        console.log(gameId);
      });
  };
  
gameId();
