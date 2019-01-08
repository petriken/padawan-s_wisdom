import monsterName from "../common/choiseMonsterNames";

let monsterCount = -1;
export function setMonsterName() {
  let name = document.createElement("div");
  name.className = "progress-bar-wrapper__name monster";
  name.innerHTML = monsterName();
  let MonsterName = document.querySelector(".progress-bar-wrapper__right");
  MonsterName.insertBefore(name, MonsterName.firstChild);
  monsterCount++;
  document.getElementById("countDefeatMonster").innerHTML = monsterCount;
}
