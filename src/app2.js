import "./app2.css";
import $ from "jquery";

const localKey = "app2.index";
const eventBus = $(window);

const m = {
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0,
  },
  // model对象经典的CRUD
  create() {},
  delete() {},
  update(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:update");
    localStorage.setItem(localKey, m.data.index);
  },
  read() {},
};

const v = {
  el: null, //element
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
  init(container) {
    v.el = $(container);
  },
  render(index) {
    if (v.el.children().length !== 0) v.el.empty();
    $(v.html(index)).appendTo(v.el);
  },
};

const c = {
  init(container) {
    v.init(container);
    v.render(m.data.index);
    c.autoBindEvents();
    eventBus.on("m:update", () => {
      v.render(m.data.index);
    });
  },
  events: {
    "click #tabBar > li": "toggle",
  },
  autoBindEvents() {
    for (let key in c.events) {
      const value = c[c.events[key]];
      const spaceIndex = key.indexOf(" ");
      const eventType = key.slice(0, spaceIndex);
      const selector = key.substring(spaceIndex + 1);
      v.el.on(eventType, selector, value);
    }
  },
  toggle(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    m.update({ index: index });
  },
};


export default c;
