import "./app1.css";
import $ from "jquery";

const m = {
  data: {
    n: parseInt(localStorage.getItem("value")) || 100,
  },
};
const v = {
  el: null, //element
  html: `
  <section id="app1">
    <div class="wrapper">
      <div class="output">
        <span id="number">{{n}}</span>
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
    if (!v.el) {
      v.el = $(v.html.replace("{{n}}", m.data.n)).appendTo("body > .page");
    } else {
      const newEl = $(v.html.replace("{{n}}", m.data.n));
      v.el.replaceWith(newEl);
      v.el = newEl;
    }
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
