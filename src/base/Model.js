class Model {
  constructor(options) {
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
  }

  delete() {
  }

  update() {
  }

  read() {
  }
}

export default Model;
