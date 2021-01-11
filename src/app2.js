import "./app2.css";
import $ from "jquery";
import Model from "./base/Model.js";
import View from "./base/View.js";

const localKey = "app2.index"; // localStorage记录键名
const eventBus = $(window);

const m = new Model({
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0,
  },
  update(data) {
    Object.assign(this.data, data);
    eventBus.trigger("m:update");
    localStorage.setItem(localKey, this.data.index);
  },
});

const init = (container) => {
  new View({
    el: container,
    data: m.data,
    eventBus: eventBus,
    events: {
      "click #tabBar > li": "toggle",
    },
    html(index) {
      return `
    <div class="wrapper">
      <ol id="tabBar">
        <li class="${
          index === 0 ? "selected" : ""
        }" data-index="0"><span>item1</span></li>
        <li class="${
          index === 1 ? "selected" : ""
        }" data-index="1"><span>item2</span></li>
      </ol>
      <ol id="tabContent">
        <li class=${index === 0 ? "active" : ""}>111111</li>
        <li class=${index === 1 ? "active" : ""}>222222</li>
      </ol>
    </div>
    `;
    },
    render(data) {
      const index = data.index;
      if (this.el.children().length !== 0) this.el.empty();
      $(this.html(index)).appendTo(this.el);
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
    toggle(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      m.update({ index: index });
    },
  });
};

export default init;
