import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      login: false,
      user: [],
    },
  },

  getters: {
    isLoggedIn(state) {
      return state.auth.login;
    },
  },

  mutations: {
    LOGIN(state, status) {
      state.auth.login = status;
      state.auth.user = [];
    },

    AUTH_USER(state, user) {
      state.auth.user = user;
    },
  },

  actions: {},
});
