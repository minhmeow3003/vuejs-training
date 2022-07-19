const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      statusList: true,
    };
  },
  computed: {
    titleButton() {
      return this.statusList ? "Show" : "Hide";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    changeStatusList() {
      this.statusList = !this.statusList;
    },
  },
});

app.mount("#assignment");
