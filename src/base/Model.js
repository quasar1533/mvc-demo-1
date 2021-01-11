import EventBus from "./EventBus.js";

class Model extends EventBus {
  constructor(options) {
    super();
    ["data", "create", "update", "delete", "read"].forEach((key) => {
      if (key in options) {
        this[key] = options[key];
      }
    });
  }

  // constructor(options) {
  //   Object.assign(this, options);
  // }
  create() {
    // Optional Chaining
    console?.log?.("Method has not implemented yet");
    // console && console.log && console.log("Method has not implemented yet");
  }

  delete() {
    console && console.log && console.log("Method has not implemented yet");
  }

  update() {
    console && console.log && console.log("Method has not implemented yet");
  }

  read() {
    console && console.log && console.log("Method has not implemented yet");
  }
}

export default Model;
