<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(23);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 23,
    // });

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], (newValue, oldValue) => {
      console.log(newValue[0], oldValue[0], newValue[1], oldValue[1]);
    });

    const setNewAge = () => {
      uAge.value = 33;
    };

    const setLastName = () => {
      lastName.value = lastNameInput.value.value;
    };

    setTimeout(() => {
      // uName.value = 'Max';
      // uAge.value = 33
      // user.name = 'Max';
      // user.age = 33;
    }, 2000);

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      setLastName,
      lastNameInput,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
