import "./app1.css";
import $ from "jquery";

const $btnAdd = $("#add1");
const $btnMinus = $("#minus1");
const $btnMulti = $("#multi2");
const $btnDivide = $("#divide2");
const $number = $("#number");
$number.text(localStorage.getItem("value") || 100);

$btnAdd.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("value", n);
  $number.text(n);
});
$btnMinus.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("value", n);
  $number.text(n);
});
$btnMulti.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("value", n);
  $number.text(n);
});
$btnDivide.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("value", n);
  $number.text(n);
});
