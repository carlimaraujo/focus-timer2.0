import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  timer.countDown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  state.minutes = 0;
  state.seconds = 0;
  timer.updateDisplay();
}

export function addTime() {
  state.minutes = Number(el.minutes.textContent) + 5;
  state.seconds = Number(el.seconds.textContent);

  if (state.minutes > 60) {
    state.minutes = 60;
    state.seconds = 0;
  }

  timer.updateDisplay();
}

export function decreaseTime() {
  state.minutes = Number(el.minutes.textContent) - 5;
  state.seconds = Number(el.seconds.textContent);

  if (state.minutes < 0) {
    state.minutes = 0;
    state.seconds = 0;
  }
  timer.updateDisplay();
}

