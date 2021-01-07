import "./app1.css";
import $ from "jquery";

const m = {
  data: {
    n: parseInt(localStorage.getItem("value")) || 100,
  },
};
const v = {
  el: null, //element
  container: null,
  html: `
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
  `,
  init(container) {
    v.container = $(container);
  },
  render(n) {
    if (v.container.children().length !== 0) v.container.empty();
    $(v.html.replace("{{n}}", n)).appendTo(v.container);
  },
};
const c = {
  init(container) {
    v.init(container);
    v.render(m.data.n);
    c.autoBindEvents();
  },
  events: {
    "click #add1": "add1",
    "click #minus1": "minus1",
    "click #multi2": "multi2",
    "click #divide2": "divide2",
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      const spaceIndex = key.indexOf(" ");
      const eventType = key.slice(0, spaceIndex);
      const selector = key.substring(spaceIndex + 1);
      v.container.on(eventType, selector, value);
    }
  },
  add1() {
    m.data.n += 1;
    v.render(m.data.n);
  },
  minus1() {
    m.data.n -= 1;
    v.render(m.data.n);
  },
  multi2() {
    m.data.n *= 2;
    v.render(m.data.n);
  },
  divide2() {
    m.data.n /= 2;
    v.render(m.data.n);
  },
};

export default c;
