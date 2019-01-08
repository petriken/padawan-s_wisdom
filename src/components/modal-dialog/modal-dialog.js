import template from "./modal-dialog.template";
import "./modal-dialog.scss";

class ModalDialog {
  static draw() {
    const contentEl = document.querySelector("main");
    contentEl.insertAdjacentHTML("beforeend", template);
  }
}

export default ModalDialog;
