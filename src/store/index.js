import { createStore } from 'vuex';
import { exchangeRate } from '../api'

export default createStore({
  state: {
    remittance : '',
    sourceCurrency: 'USD',
    targetCurrency: 'KRW',
    quotes: {},
    currencyMoney: 0,
  },
  getters: {
    currencyMoney(state) {
      return state.currencyMoney = (state.quotes[`${state.sourceCurrency}${state.targetCurrency}`] || 0).toFixed(2);
    },
    calculatorMoney(state) {
      return (state.remittance * state.currencyMoney).toFixed(2);
    }
  },
  mutations: {
    SET_QUOTES(state, quotes) {
      state.quotes = quotes;
    },
    SET_REMITTANCE(state, remittance) {
      state.remittance = remittance;
    },
    SET_TARGET_CURRENCY(state, currency) {
      state.targetCurrency = currency;
    }  
  },
  actions: {
    setExchangeRate({commit}) {
      return exchangeRate.fetch()
        .then((data) => data && commit('SET_QUOTES', data.quotes))
    }
  }
});