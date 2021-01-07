import "./app1.css";
import $ from "jquery";

const m = {
  data: {
    n: parseInt(localStorage.getItem("value")) || 100,
  },
};
const v = {
  html: `
  <section id="app1">
    <div class="wrapper">
      <div class="output">
        <span id="number">100</span>
      </div>
      <div class="buttons">
        <button id="add1">+1</button>
        <button id="minus1">-1</button>
        <button id="multi2">*2</button>
        <button id="divide2">/2</button>
      </div>
    </div>
  </section>  
  `,
  render() {
    const element = $(v.html).appendTo("body > .page");
  },
  update() {
    c.ui.number.text(m.data.n);
  },
};
const c = {
  init() {
    c.ui = {
      btnAdd: $("#add1"),
      btnMinus: $("#minus1"),
      btnMulti: $("#multi2"),
      btnDivide: $("#divide2"),
      number: $("#number"),
    };
    v.update();
  },
  bindEvents() {
    c.ui.btnAdd.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n += 1;
      localStorage.setItem("value", n);
      c.ui.number.text(n);
    });
    c.ui.btnMinus.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n -= 1;
      localStorage.setItem("value", n);
      c.ui.number.text(n);
    });
    c.ui.btnMulti.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n *= 2;
      localStorage.setItem("value", n);
      c.ui.number.text(n);
    });
    c.ui.btnDivide.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n /= 2;
      localStorage.setItem("value", n);
      c.ui.number.text(n);
    });
  },
};

v.render();
c.init();
c.bindEvents();
