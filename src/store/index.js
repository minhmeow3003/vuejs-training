import { createStore } from 'vuex';

import rootMutation from './mutation';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutation, // Tranh tac dong truc tiep vao data trong store (dung commit() de parse data sang component, phai xu ly sync)
  actions: rootActions, // Tuong tu mutation nhung de xu ly async (dung dispatch() de parse data sang component)
  getters: rootGetters, // Lay gia tri tra ve giong nhau nhung khac component (Giao tiep giua state trong store voi component qua getter)
});

export default store;
