import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) =>
  document
    .querySelector(`.${ICONS[icon]}-icon`)
    .classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcon = 0;
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length; // Using Modulus Operator (Remainder) to loop back around and select the expected icon - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length; // Using Modulus Operator (Remainder) to loop back around and select the expected icon - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
      toggleHighlighted(selectedIcon, true);
    } else {
      handleUserAction(ICONS[selectedIcon]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
