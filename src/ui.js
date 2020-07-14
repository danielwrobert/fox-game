// Helper functions for modifying the DOM

// Note: The second function name in the definitions are optional but they help with debugging.
// We also don't really need the "const modFox" parts - it would be just fine to write as `export function modFox` instead.

export const modFox = function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
};
export const modScene = function modScene(state) {
  document.querySelector(".game").className = `game ${state}`;
};
export const togglePoopBag = function togglePoopBag(show) {
  document.querySelector(".poop-bag").classList.toggle("hidden", !show); // sets class in `toggle` to the opposite of what gets passed in as `show`.
};
