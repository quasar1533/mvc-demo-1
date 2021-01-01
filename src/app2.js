import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tabBar");
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li
  .addClass('selected')
  .siblings()
  .removeClass('selected');
  let index = $li.index();
  $("#app2 .tabContent")
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$tabBar.children().eq(0).trigger("click");
