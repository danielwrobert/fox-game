import { modFox, modScene } from "./ui";
import { SCENES, RAIN_CHANCE } from "./constants";

const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1, // using -1 is referred to as a "sentinel value", which essentially means that it's not currently active. You could also use `undefined` but it's a good habit to keep things in the same Type.
  tick() {
    this.clock++;

    console.log("Clock: ", this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    }

    return this.clock;
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
    modFox("egg");
    modScene("day");
  },
  wake() {
    this.current = "IDLING";
    this.wakeTime = -1;
    modFox("idling");
    this.scene = Math.random() > RAIN_CHANCE ? 0 : 1;
    modScene(SCENES[this.scene]);
  },
  handleUserAction(icon) {
    console.log(icon);

    // can't do actions while in these states
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current) // if the value of `this.current` is inside of this Array
    ) {
      // do nothing
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    // execute the currently selected action
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("changeWeather");
  },
  cleanUpPoop() {
    console.log("cleanUpPoop");
  },
  feed() {
    console.log("feed");
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState); // binds the context of `this` to our `gameState` object. Otherwise the context will be lost (and probably default to `window`) when used in the event listener callback for the button clicks.
export default gameState;
