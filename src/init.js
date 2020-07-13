import game, { handleUserAction } from "./gameState"; // use the bound version of `handleUserAction` that is set in the export in gameState.
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

async function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
