import "./app3.css";
import $ from "jquery";

const html = `
<section id="app3">
  <div class="wrapper">
    <div class="square"></div>
  </div>
</section>
`;
const element = $(html).appendTo("body > .page");

const localKey = "app3.active";
const $square = $("#app3 .square");
const active = localStorage.getItem(localKey) === "true";

// if (active) {
//   $square.addClass("active");
// } else {
//   $square.removeClass("active");
// }
// can be replaced by jQuery toggleClass
$square.toggleClass("active", active);

$square.on("click", () => {
  if ($square.hasClass("active")) {
    $square.removeClass("active");
    localStorage.setItem(localKey, "false");
  } else {
    $square.addClass("active");
    localStorage.setItem(localKey, "true");
  }
});
