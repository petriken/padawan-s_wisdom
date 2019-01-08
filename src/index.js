import "bootstrap";
import $ from "jquery";
import "./index.scss";
import "./components/battle/battle.js";

$("#nav-tabContent a").on("click", function(e) {
  e.preventDefault();
  $(this).tab("show");
});
