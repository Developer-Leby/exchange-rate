import { createStore } from 'vuex';
import router from '../routes/router';
import { getExchangeRete } from '../api';

const redirectionErrorPage = (message) => {
  router.push({ path: '/errorPage', name: 'ErrorPage', params: { message: message } })
}

const state = {
  remittance : '',
  sourceCurrency: 'USD',
  targetCurrency: 'KRW',
  quotes: {},
  exchangeRate: 0,
}

const getters = {
  exchangeRate(state) {
    return state.exchangeRate = (state.quotes[`${state.sourceCurrency}${state.targetCurrency}`] || 0).toFixed(2);
  },
  calculatorMoney(state) {
    return (state.remittance * state.exchangeRate).toFixed(2);
  }
}

const mutations = {
  SET_QUOTES(state, quotes) {
    state.quotes = quotes;
  },
  SET_REMITTANCE(state, remittance) {
    state.remittance = remittance;
  },
  SET_TARGET_CURRENCY(state, currency) {
    state.targetCurrency = currency;
  }  
}

const actions = {
  fetchExchangeRate({ commit }) {
    getExchangeRete()
      .then((result) => {
        const error = result.data.error;
        if (error) redirectionErrorPage(error.info);
        else commit('SET_QUOTES', result.data.quotes);
      })
      .catch((error) => redirectionErrorPage(error.info))
  },    
}

export default createStore({
  state,
  getters,
  mutations,
  actions
});