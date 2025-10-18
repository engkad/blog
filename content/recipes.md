---
title: "Recipes"
date: 2025-10-06
draft: false
tags: []
TocOpen: true
---

<h2>Greek Yogurt Pizza Crust</h2>

<div id="recipe-container">
  <div style="margin-bottom:1em;">
    <label>Multiplier: 
      <input id="multiplier" type="number" value="1" step="0.5" min="0.5" style="width:60px;">
    </label>
    <button id="apply-multiplier">Apply</button>
  </div>

  <div>
    <label>
      <input type="checkbox" id="keep-awake">
      Keep screen awake 🔆
    </label>
  </div>

  <h3>Ingredients (makes 1 crust)</h3>
  <ul id="ingredients">
    <li><input type="checkbox"> <span data-amount="1" data-unit="cup">1 cup</span> Greek yogurt (adjust for dough moisture)</li>
    <li><input type="checkbox"> <span data-amount="1" data-unit="cup">1 cup</span> self-rising flour (or <span data-amount="1.5" data-unit="tsp">1½ tsp</span> baking powder + 1 cup AP flour)</li>
    <li><input type="checkbox"> <span data-amount="0.25" data-unit="tsp">¼–½ tsp</span> salt</li>
    <li><input type="checkbox"> Optional: garlic powder and herbs</li>
    <li><input type="checkbox"> Option: blended cottage cheese instead of yogurt</li>
  </ul>
</div>

<script>
(function() {
  const multiplierInput = document.getElementById('multiplier');
  const applyButton = document.getElementById('apply-multiplier');
  const ingredients = document.querySelectorAll('#ingredients span[data-amount]');
  const keepAwake = document.getElementById('keep-awake');
  let wakeLock = null;

  applyButton.addEventListener('click', () => {
    const mult = parseFloat(multiplierInput.value);
    ingredients.forEach(span => {
      const amt = parseFloat(span.getAttribute('data-amount'));
      const unit = span.getAttribute('data-unit');
      span.textContent = (amt * mult).toFixed(2).replace(/\.00$/, '') + ' ' + unit;
    });
  });

  keepAwake.addEventListener('change', async () => {
    if ('wakeLock' in navigator) {
      if (keepAwake.checked) {
        try {
          wakeLock = await navigator.wakeLock.request('screen');
        } catch (err) {
          alert('Could not keep screen awake: ' + err);
        }
      } else if (wakeLock) {
        wakeLock.release();
        wakeLock = null;
      }
    } else {
      alert('Screen wake lock not supported on this device.');
      keepAwake.checked = false;
    }
  });
})();
</script>

<style>
#recipe-container {
  font-size: 1rem;
  line-height: 1.5;
}
#ingredients li {
  list-style: none;
  margin: 0.3em 0;
}
#ingredients input[type="checkbox"] {
  margin-right: 0.5em;
}
button {
  margin-left: 0.3em;
  padding: 0.2em 0.5em;
}
</style>

![Greek Yogurt Pizza Crust](IMG_2687.jpeg)
