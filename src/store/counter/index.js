import counterMutation from './mutation';
import counterActions from './actions';
import counterGetters from './getters';

export default {
  namespaced: true,
  state() {
    // local o trong module
    return {
      counter: 0,
    };
  },
  mutations: counterMutation,
  actions: counterActions,
  getters: counterGetters,
};
