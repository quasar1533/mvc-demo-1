import $ from "jquery";
import EventBus from "./EventBus.js";

class View extends EventBus {
  constructor(options) {
    super();
    Object.assign(this, options);
    this.el = $(this.el);
    this.render(this.data);
    this.autoBindEvents();
    this.on("m:update", () => {
      this.render(this.data);
    });
  }
  autoBindEvents() {
    for (let key in this.events) {
      const value = this[this.events[key]];
      const spaceIndex = key.indexOf(" ");
      const eventType = key.slice(0, spaceIndex);
      const selector = key.substring(spaceIndex + 1);
      this.el.on(eventType, selector, value);
    }
  }
}

export default View;
