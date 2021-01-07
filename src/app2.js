import "./app2.css";
import $ from "jquery";

const html = `
<section id="app2">
  <div class="wrapper">
    <ol class="tabBar">
      <li><span>item1</span></li>
      <li><span>item2</span></li>
    </ol>
    <ol class="tabContent">
      <li>111111</li>
      <li>222222</li>
    </ol>
  </div>
</section>
`;
const element = $(html).appendTo("body > .page");

const localKey = "app2.index";
const index = localStorage.getItem(localKey) || 0;

const $tabBar = $("#app2 .tabBar");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  let index = $li.index();
  localStorage.setItem(localKey, index);
  $("#app2 .tabContent")
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(index).trigger("click");
