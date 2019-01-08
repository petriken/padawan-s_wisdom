export function setGamerName() {
  let name = document.createElement("div");
  name.className = "progress-bar-wrapper__name gamer";
  name.innerHTML = document.getElementById("gamer-name").value;
  let GamerName = document.querySelector(".progress-bar-wrapper__left");
  GamerName.insertBefore(name, GamerName.firstChild);
  document.getElementById("heroName").innerHTML = name.innerHTML;
}
