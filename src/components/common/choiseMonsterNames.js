const adjective = ["скользкий", "подлый", "падший","мерзкий"];
const type = ["дарт", "тиран", "граф", "канцлер"];
const name = ["Сидиус", "Дуку", "Вейдер", "Палпатин"];

function randomInteger() {
  let rand = 0 + Math.random() * (3 + 1 - 0);
  rand = Math.floor(rand);
  return rand;
}

function choiseMonsterNames () {
  return adjective[randomInteger()]+' '+type[randomInteger()]+' '+name[randomInteger()];
}

export default choiseMonsterNames