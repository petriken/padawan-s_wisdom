export function playerDraw() {
  let images = [
      "../battle/images/player/image_2.png",
      "../battle/images/player/image_3.png"
    ],
    length = images.length,
    index = 1;
  setInterval(function() {
    if (index == length) index = 0;
    document.getElementById("image_id").src = images[index++];
  }, 700);
}
