(function () {
  const appDiv = document.getElementById("scorekeeper-app");

  const state = {
    players: [],
    rounds: [],
    currentRound: 0,
    trickSequence: [],
    awardOnMiss: true,
  };

  function saveState() {
    localStorage.setItem("ohhell_state", JSON.stringify(state));
  }

  function loadState() {
    const saved = localStorage.getItem("ohhell_state");
    if (saved) {
      Object.assign(state, JSON.parse(saved));
    }
  }

  function resetState() {
    localStorage.removeItem("ohhell_state");
    location.reload();
  }

  function generateTrickSequence(max) {
    const down = Array.from({ length: max }, (_, i) => max - i);
    const up = Array.from({ length: max - 1 }, (_, i) => i + 2);
    return [...down, ...up];
  }

  function renderInitialForm() {
    appDiv.innerHTML = `
      <h2>Oh Hell Scorekeeper</h2>
      <form id="player-form">
        <label>Enter player names (comma-separated):</label><br>
        <input type="text" id="player-names" style="width:100%" /><br><br>

        <label>Max tricks per round (e.g. 5):</label><br>
        <input type="number" id="max-tricks" min="1" style="width:100%" /><br><br>

        <label>
          <input type="checkbox" id="award-on-miss" checked>
          Award tricks even if guess is wrong?
        </label><br><br>

        <button type="submit">Start Game</button>
      </form>
    `;

    document.getElementById("player-form").onsubmit = (e) => {
      e.preventDefault();
      const names = document.getElementById("player-names").value
        .split(",")
        .map((n) => n.trim())
        .filter((n) => n);
      const maxTricks = parseInt(document.getElementById("max-tricks").value, 10);
      const awardOnMiss = document.getElementById("award-on-miss").checked;

      if (names.length < 2 || isNaN(maxTricks) || maxTricks < 1) {
        alert("Enter at least 2 players and a valid number of tricks.");
        return;
      }

      state.players = names;
      state.trickSequence = generateTrickSequence(maxTricks);
      state.awardOnMiss = awardOnMiss;
      state.rounds = [];
      state.currentRound = 0;
      saveState();
      renderRoundInput();
    };
  }

  function renderRoundInput() {
    const trickCount = state.trickSequence[state.currentRound];
    if (trickCount === undefined) {
      renderScoreTable(true); // game over
      return;
    }

    let html = `<h2>Round ${state.currentRound + 1} – ${trickCount} Tricks</h2>`;
    html += `<form id="round-form"><table>`;
    html += `<tr><th>Player</th><th>Bid</th><th>Tricks Won</th></tr>`;

    state.players.forEach((player, i) => {
      html += `
        <tr>
          <td>${player}</td>
          <td><input type="number" name="bid-${i}" min="0" max="${trickCount}" required></td>
          <td><input type="number" name="won-${i}" min="0" max="${trickCount}" required></td>
        </tr>
      `;
    });

    html += `</table><button type="submit">Submit Round</button></form>`;
    html += `<button id="reset-game-btn">Reset Game</button>`;

    appDiv.innerHTML = html;

    document.getElementById("round-form").onsubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const round = { bids: [], won: [], scores: [] };

      state.players.forEach((_, i) => {
        const bid = parseInt(form.get(`bid-${i}`), 10);
        const won = parseInt(form.get(`won-${i}`), 10);
        round.bids[i] = bid;
        round.won[i] = won;

        const gotItRight = bid === won;

        let score = 0;
        if (gotItRight) {
          score = won + 10;
        } else if (state.awardOnMiss) {
          score = won;
        } else {
          score = 0;
        }

        round.scores[i] = score;
      });

      state.rounds.push(round);
      state.currentRound++;
      saveState();
      renderScoreTable();
    };

    document.getElementById("reset-game-btn").addEventListener("click", resetState);
  }

  function renderScoreTable(gameOver = false) {
    let html = `<h2>${gameOver ? "Final Scores" : "Scores"}</h2><table><tr><th>Player</th>`;

    state.rounds.forEach((_, i) => {
      html += `<th>R${i + 1}</th>`;
    });

    html += `<th>Total</th></tr>`;

    state.players.forEach((player, i) => {
      html += `<tr><td>${player}</td>`;
      let total = 0;
      state.rounds.forEach((round) => {
        const bid = round.bids[i];
        const won = round.won[i];
        const score = round.scores[i];
        total += score;
        html += `<td>${bid}/${won} → ${score}</td>`;
      });
      html += `<td><strong>${total}</strong></td></tr>`;
    });

    html += `</table>`;

    if (!gameOver) {
    html += `<div style="margin-top:1em">
        <button id="next-round-btn" style="margin-right:1em">Next Round</button>
        <button id="reset-game-btn">Reset Game</button>
    </div>`;
    } else {
    html += `<div style="margin-top:1em">
        <button id="reset-game-btn">Reset Game</button>
    </div>`;
    }

    appDiv.innerHTML = html;

    if (!gameOver) {
      document.getElementById("next-round-btn").addEventListener("click", renderRoundInput);
    }
    document.getElementById("reset-game-btn").addEventListener("click", resetState);
  }

  // Initialize
  loadState();
  if (state.players.length > 0 && state.trickSequence.length > 0) {
    if (state.currentRound >= state.trickSequence.length) {
      renderScoreTable(true);
    } else {
      renderScoreTable();
    }
  } else {
    renderInitialForm();
  }
})();
