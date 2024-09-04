import state from "./state.js";
import * as sounds from "./sounds.js";

// let runnig = "running";

// function keepRuning() {
//   document.documentElement.classList.forEach(function (classe) {
//     if (classe !== runnig) {
//       document.documentElement.classList.remove(classe);
//     }
//   });
//   state.isMute = true;
//   return;
// }

function pauseRain() {
  if (
    !sounds.rainSound.paused &&
    !sounds.rainSound.ended &&
    sounds.rainSound.currentTime > 0
  ) {
    sounds.rainSound.pause();
    state.isMute = document.documentElement.classList.remove("playRain");
  }
  return;
}
function pauseForest() {
  if (
    !sounds.forestSound.paused &&
    !sounds.forestSound.ended &&
    sounds.forestSound.currentTime > 0
  ) {
    sounds.forestSound.pause();
    state.isMute = document.documentElement.classList.remove("playForest");
  }
  return;
}
function pauseFirePlace() {
  if (
    !sounds.fireplaceSound.paused &&
    !sounds.fireplaceSound.ended &&
    sounds.fireplaceSound.currentTime > 0
  ) {
    sounds.fireplaceSound.pause();
    state.isMute = document.documentElement.classList.remove("playFireplace");
  }
  return;
}
function pauseCafeteria() {
  if (
    !sounds.cafeteriaSound.paused &&
    !sounds.cafeteriaSound.ended &&
    sounds.cafeteriaSound.currentTime > 0
  ) {
    sounds.cafeteriaSound.pause();
    state.isMute = document.documentElement.classList.remove("playCafeteria");
  }
  return;
}

export function playForest() {
  pauseCafeteria();
  pauseFirePlace();
  pauseRain();

  state.isMute = document.documentElement.classList.toggle("playForest");

  if (state.isMute) {
    sounds.forestSound.play();
    return;
  }
  sounds.forestSound.pause();
}

export function playRain() {
  pauseCafeteria();
  pauseFirePlace();
  pauseForest();
  state.isMute = document.documentElement.classList.toggle("playRain");
  if (state.isMute) {
    sounds.rainSound.play();
    return;
  }

  sounds.rainSound.pause();
}

export function playCafeteria() {
  pauseForest();
  pauseFirePlace();
  pauseRain();
  state.isMute = document.documentElement.classList.toggle("playCafeteria");
  if (state.isMute) {
    sounds.cafeteriaSound.play();
    return;
  }

  sounds.cafeteriaSound.pause();
}

export function playFireplace() {
  pauseCafeteria();
  pauseForest();
  pauseRain();
  state.isMute = document.documentElement.classList.toggle("playFireplace");
  if (state.isMute) {
    sounds.fireplaceSound.play();
    return;
  }

  sounds.fireplaceSound.pause();
}
