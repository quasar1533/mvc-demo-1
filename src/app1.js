import "./app1.css";
import $ from "jquery";

const localKey = "value";   // localStorage记录键名
const eventBus = $(window);

const m = {
  data: {
    n: parseInt(localStorage.getItem(localKey)) || 100,
  },
  // model对象经典的CRUD
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:update");
    localStorage.setItem(localKey, m.data.n);
  },
  read() {},
};

const view = {
  init(container) {
    view.el = $(container);
    view.render(m.data.n);
    view.autoBindEvents();
    eventBus.on("m:update", () => {
      view.render(m.data.n);
    });
  },
  render(n) {
    if (view.el.children().length !== 0) view.el.empty();
    $(view.html.replace("{{n}}", n)).appendTo(view.el);
  },
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
  events: {
    "click #add1": "add1",
    "click #minus1": "minus1",
    "click #multi2": "multi2",
    "click #divide2": "divide2",
  },
  autoBindEvents() {
    for (let key in view.events) {
      const value = view[view.events[key]];
      const spaceIndex = key.indexOf(" ");
      const eventType = key.slice(0, spaceIndex);
      const selector = key.substring(spaceIndex + 1);
      view.el.on(eventType, selector, value);
    }
  },
  add1() {
    m.update({ n: (m.data.n += 1) });
  },
  minus1() {
    m.update({ n: (m.data.n -= 1) });
  },
  multi2() {
    m.update({ n: (m.data.n *= 2) });
  },
  divide2() {
    m.update({ n: (m.data.n /= 2) });
  },
};

export default view;
