import { createStore } from "vuex";
import router from '../router';
import { getExchangeRete } from "../api";

const redirectionErrorPage = (message) => {
  router.push({
    path: '/error',
    params: {
      message: message
    }
  });
}

const state = {
  quotes: {},
}

const mutations = {
  SET_QUOTES(state, quotes) {
    state.quotes = quotes;
  },
}

const actions = {
  fetchExchangeRate({ commit }) {
    getExchangeRete()
      .then((result) => {
        const error = result.data.error;
        if (error) redirectionErrorPage(error.info);
        else commit('SET_QUOTES', result.data.quotes);          
      })
      .catch((err) => redirectionErrorPage(err.statusText));
  },    
}

export default createStore({
  state,
  mutations,
  actions
});