const app = Vue.createApp({
  data() {
    return {
      className: "",
      statusClass: true,
      color: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        visible: this.statusClass,
        hidden: !this.statusClass,
      };
    },
  },
  methods: {
    toggle() {
      this.statusClass = !this.statusClass;
    },
  },
});

app.mount("#assignment");
