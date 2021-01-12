import "./app1.css";
import Vue from "vue";

const localKey = "value"; // localStorage记录键名

const init = (container) => {
  const m = {
    get: () => {
      return parseFloat(localStorage.getItem(localKey)) || 100;
    },
    set: (n) => {
      localStorage.setItem(localKey, n);
    },
  };
  new Vue({
    el: container,
    data: {
      n: m.get(),
    },
    template: `
      <section id="app1">
        <div class="wrapper">
          <div class="output">
            <span id="number">{{n}}</span>
          </div>
          <div class="buttons">
            <button @click="add">+1</button>
            <button @click="minus">-1</button>
            <button @click="multi">*2</button>
            <button @click="divide">/2</button>
          </div>
        </div>
      </section> 
    `,
    methods: {
      add() {
        this.n += 1;
      },
      minus() {
        this.n -= 1;
      },
      multi() {
        this.n *= 2;
      },
      divide() {
        this.n /= 2;
      },
    },
    watch: {
      n() {
        m.set(this.n);
      },
    },
  });
};

export default init;
