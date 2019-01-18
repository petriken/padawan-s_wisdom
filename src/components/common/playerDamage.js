import { playSound } from "../battle/audio/playSound";

export function playerDamage() {
  document.getElementById("image_id").style.display = "none";
  document.getElementById("playerDamage-image_id").style.display = "block";
  let images = [
      "./images/player/damage_1.png",
      "./images/player/damage_2.png",
      "./images/player/damage_3.png",
      "./images/player/damage_4.png",
      "./images/player/damage_5.png",
      "./images/player/damage_6.png",
      "./images/player/damage_7.png",
      "./images/player/damage_8.png",
      "./images/player/damage_9.png",
      "./images/player/damage_10.png",
      "./images/player/damage_10.png"
    ],
    length = images.length,
    index = 1;
  playSound("kick");

  let playerFireBegin = setInterval(function() {
    if (index == length) index = 0;
    document.getElementById("playerDamage-image_id").src = images[index++];
    console.log(images[index]);
  }, 1000 / 10);

  setTimeout(function() {
    clearInterval(playerFireBegin);
    document.getElementById("playerDamage-image_id").style.display = "none";
    document.getElementById("image_id").style.display = "block";
  }, 1100);
}
