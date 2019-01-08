import template from "./battle.template";
export class BattleDraw {
  static draw() {
    const contentEl = document.querySelector(".battle-content");
    while (contentEl.firstChild) {
      contentEl.removeChild(contentEl.firstChild);
    }
    contentEl.insertAdjacentHTML("afterbegin", template);
  }
}
export default BattleDraw;