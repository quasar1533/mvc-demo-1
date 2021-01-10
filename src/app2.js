import "./app2.css";
import $ from "jquery";

const localKey = "app2.index";  // localStorage记录键名
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

const view = {
  init(container) {
    view.el = $(container);
    view.render(m.data.index);
    view.autoBindEvents();
    eventBus.on("m:update", () => {
      view.render(m.data.index);
    });
  },
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
  render(index) {
    if (view.el.children().length !== 0) view.el.empty();
    $(view.html(index)).appendTo(view.el);
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
  toggle(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    m.update({ index: index });
  },
};


export default view;
