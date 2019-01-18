import { playSound } from "../battle/audio/playSound";

export function playerFire() {
  document.getElementById("image_id").style.display = "none";
  document.getElementById("playerFire-image_id").style.display = "block";
  let images = [
      "./images/player/fire_1.png",
      "./images/player/fire_2.png",
      "./images/player/fire_3.png",
      "./images/player/fire_4.png",
      "./images/player/fire_5.png",
      "./images/player/fire_6.png",
      "./images/player/fire_7.png",
      "./images/player/fire_8.png",
      "./images/player/fire_9.png",
      "./images/player/fire_10.png",
      "./images/player/fire_11.png",
      "./images/player/fire_12.png"
    ],
    length = images.length,
    index = 1;
  playSound("laser");

  let playerFireBegin = setInterval(function() {
    if (index == length) index = 0;
    document.getElementById("playerFire-image_id").src = images[index++];
    console.log(images[index]);
  }, 1000 / 10);

  setTimeout(function() {
    clearInterval(playerFireBegin);
    document.getElementById("playerFire-image_id").style.display = "none";
    document.getElementById("image_id").style.display = "block";
  }, 1200);
}
