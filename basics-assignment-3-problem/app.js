const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(num) {
      if (num === 5) {
        this.count += 5;
      } else if (num === 1) {
        this.count++;
      }
      console.log(this.count);
    },
  },
  watch: {
    changeResult() {
      setTimeout(() => {
        this.count = 0;
      }, 5000);
    },
  },
  computed: {
    changeResult() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count > 37) {
        return "Too much!";
      } else {
        return this.count;
      }
    },
  },
});

app.mount("#assignment");
