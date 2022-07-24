const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "minh",
          name: "Nguyen Cong Minh",
          phone: "012345666",
          email: "minh@local.com",
        },
        {
          id: "dan",
          name: "Ha Nhat Dan",
          phone: "012334666",
          email: "dan@local.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetail">
      {{detailsAreVisable ? "Hide" : "Show"}} Details
    </button>
    <ul v-if="detailsAreVisable">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
  data() {
    return {
      detailsAreVisable: false,
      friend: {
        id: "minh",
        name: "Nguyen Cong Minh",
        phone: "012345666",
        email: "minh@local.com",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.detailsAreVisable = !this.detailsAreVisable;
    },
  },
});

app.mount("#app");
