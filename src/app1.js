import "./app1.css";
import $ from "jquery";
import Model from "./base/Model.js";
import View from "./base/View.js";

const localKey = "value"; // localStorage记录键名
const eventBus = $(window);

const m = new Model({
  data: {
    n: parseFloat(localStorage.getItem(localKey)) || 100,
  },
  update(data) {
    Object.assign(this.data, data);
    eventBus.trigger("m:update");
    localStorage.setItem(localKey, this.data.n);
  },
});

const init = (container) => {
  new View({
    el: container,
    data: m.data,
    eventBus: eventBus,
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
    render(data) {
      const n = data.n;
      if (this.el.children().length !== 0) this.el.empty();
      $(this.html.replace("{{n}}", n)).appendTo(this.el);
    },
    events: {
      "click #add1": "add1",
      "click #minus1": "minus1",
      "click #multi2": "multi2",
      "click #divide2": "divide2",
    },
    autoBindEvents() {
      for (let key in this.events) {
        const value = this[this.events[key]];
        const spaceIndex = key.indexOf(" ");
        const eventType = key.slice(0, spaceIndex);
        const selector = key.substring(spaceIndex + 1);
        this.el.on(eventType, selector, value);
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
  });
};

export default init;
