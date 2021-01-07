import "./app4.css";
import $ from "jquery";

const html = `
<section id="app4">
  <div class="wrapper">
    <div class="circle"></div>
  </div>
</section>
`;
const element = $(html).appendTo("body > .page")

const $circle = $(".circle");
$circle.on("mouseenter", () => {
  $circle.addClass("active");
});
$circle.on("mouseleave", () => {
  $circle.removeClass("active");
});
