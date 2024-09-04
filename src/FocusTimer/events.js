import * as el from "./elements.js";
import * as controlActions from "./controlActions.js";
import * as controlSounds from "./controlSounds.js"

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof controlActions[action] != "function") {
      return;
    }

    controlActions[action]();
  });
}

export function registerSounds() {
  el.sounds.addEventListener("click", (event) => {
    const sound = event.target.dataset.sound;
    if (typeof controlSounds[sound] != "function") {
      return;
    }

    controlSounds[sound]();
  });
}

