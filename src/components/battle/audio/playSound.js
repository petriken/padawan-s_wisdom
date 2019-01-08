export function playSound(name) {
  let audio = new Audio();
  audio.src = `./audio/${name}.mp3`;
  audio.play();
}
