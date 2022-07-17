const app = Vue.createApp({
  data() {
    return {
      output: "",
      comfirmedOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Practice Events");
    },
    setOutput(e) {
      this.output = e.target.value;
    },
    comfirmOutput() {
      this.comfirmedOutput = this.output;
    },
  },
});

app.mount("#assignment");
