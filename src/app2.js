import "./app2.css";
import Vue from "vue";

const localKey = "app2.index"; // localStorage记录键名

const init = (container) => {
  const m = {
    get: () => {
      return parseInt(localStorage.getItem(localKey)) || 0;
    },
    set: (index) => {
      localStorage.setItem(localKey, index);
    },
  };
  new Vue({
    el: container,
    data: {
      index: m.get(),
    },
    template: `
      <section id="app2">
      <div class="wrapper">
        <ol id="tabBar">
          <li :class="index === 0 ? 'selected' : ''" 
              @click="index = 0"><span>item1</span></li>
          <li :class="index === 1 ? 'selected' : ''" 
              @click="index = 1"><span>item2</span></li>
        </ol>
        <ol id="tabContent">
          <li :class="index === 0 ? 'active' : ''">111111</li>
          <li :class="index === 1 ? 'active' : ''">222222</li>
        </ol>
      </div>
      </section>
    `,
    watch: {
      index() {
        m.set(this.index);
      },
    },
  });
};

export default init;
