import $ from "jquery";

class EventBus {
  constructor() {
    this._eventBus = $(window); // As a private variable
  }

  on(eventType, handler) {
    this._eventBus.on(eventType, handler);
  }

  trigger(eventType, params) {
    this._eventBus.trigger(eventType, params);
  }

  off(eventType, handler) {
    this._eventBus.off(eventType, handler);
  }
}

export default EventBus;
