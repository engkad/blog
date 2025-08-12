(function () {
  const appDiv = document.getElementById("scorekeeper-app");

  const state = {
    players: [],
    rounds: [],
    currentRound: 0,
    trickSequence: [],
    awardOnMiss: true,
    editingRoundIndex: null, // null = adding new round
    view: "summary", // or "entry"
    currentRoundData: { bids: [], won: [] } // preserves form progress
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
      state.editingRoundIndex = null;
      state.view = "entry";
      state.currentRoundData = { bids: Array(names.length).fill(""), won: Array(names.length).fill("") };
      saveState();
      render();
    };
  }

  function renderRoundEntry() {
    const isEditing = state.editingRoundIndex !== null;
    const roundNum = isEditing ? state.editingRoundIndex : state.currentRound;
    const trickCount = state.trickSequence[roundNum];
    if (trickCount === undefined) {
      state.view = "summary";
      render();
      return;
    }

    let html = `<h2>${isEditing ? `Edit Round ${roundNum + 1}` : `Round ${roundNum + 1}`} – ${trickCount} Tricks</h2>`;
    html += `<form id="round-form"><table>`;
    html += `<tr><th>Player</th><th>Bid</th><th>Tricks Won</th></tr>`;

    state.players.forEach((player, i) => {
      let bidVal = state.currentRoundData.bids[i] ?? "";
      let wonVal = state.currentRoundData.won[i] ?? "";

      // If editing and no temporary data yet, pull from stored round
      if (isEditing && bidVal === "" && wonVal === "" && state.rounds[roundNum]) {
        bidVal = state.rounds[roundNum].bids[i];
        wonVal = state.rounds[roundNum].won[i];
      }

      html += `
        <tr>
          <td>${player}</td>
          <td><input type="number" name="bid-${i}" min="0" max="${trickCount}" value="${bidVal}" required></td>
          <td><input type="number" name="won-${i}" min="0" max="${trickCount}" value="${wonVal}" required></td>
        </tr>
      `;
    });

    html += `</table>
      <button type="submit">${isEditing ? "Save Changes" : "Submit Round"}</button>
    </form>`;

    html += `
      <div style="margin-top:1em">
        <button id="summary-view-btn" style="margin-right:1em">View Summary</button>
        <button id="reset-game-btn">Reset Game</button>
      </div>
    `;

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
        }
        round.scores[i] = score;
      });

      if (isEditing) {
        state.rounds[roundNum] = round;
      } else {
        state.rounds.push(round);
        state.currentRound++;
      }

      state.editingRoundIndex = null;
      state.currentRoundData = { bids: Array(state.players.length).fill(""), won: Array(state.players.length).fill("") };
      state.view = "summary";
      saveState();
      render();
    };

    document.querySelectorAll(`#round-form input`).forEach(input => {
      input.addEventListener("input", () => {
        const idx = parseInt(input.name.split("-")[1], 10);
        if (input.name.startsWith("bid-")) state.currentRoundData.bids[idx] = input.value;
        if (input.name.startsWith("won-")) state.currentRoundData.won[idx] = input.value;
        saveState();
      });
    });

    document.getElementById("summary-view-btn").addEventListener("click", () => {
      state.view = "summary";
      saveState();
      render();
    });

    document.getElementById("reset-game-btn").addEventListener("click", resetState);
  }

  function renderScoreTable() {
    let gameOver = state.currentRound >= state.trickSequence.length;
    let html = `<h2>${gameOver ? "Final Scores" : "Scores"}</h2><table><tr><th>Player</th>`;

    state.rounds.forEach((_, i) => {
      const trickCount = state.trickSequence[i];
      html += `<th>R${i + 1} (${trickCount}) <button style="font-size:0.7em" onclick="editRound(${i})">✎</button></th>`;
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

    html += `<div style="margin-top:1em">`;
    if (!gameOver) {
      html += `<button id="entry-view-btn" style="margin-right:1em">Go to Round Entry</button>`;
    }
    html += `<button id="reset-game-btn">Reset Game</button></div>`;

    appDiv.innerHTML = html;

    if (!gameOver) {
      document.getElementById("entry-view-btn").addEventListener("click", () => {
        state.view = "entry";
        saveState();
        render();
      });
    }
    document.getElementById("reset-game-btn").addEventListener("click", resetState);
  }

  function render() {
    if (state.view === "entry") {
      renderRoundEntry();
    } else {
      renderScoreTable();
    }
  }

  // Edit round from anywhere
  window.editRound = function (roundIndex) {
    state.editingRoundIndex = roundIndex;
    state.view = "entry";
    saveState();
    render();
  };

  // Initialize
  loadState();
  if (state.players.length > 0 && state.trickSequence.length > 0) {
    render();
  } else {
    renderInitialForm();
  }
})();