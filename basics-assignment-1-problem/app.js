const app = Vue.createApp({
  data() {
    return {
      myName: "Nguyen Cong Minh",
      myAge: 23,
      randomNumber: Math.random(),
      imgLink:
        "https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/4/28/20220322141738-1651118648724855658012.jpg",
    };
  },
  methods: {
    calMyAge() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
