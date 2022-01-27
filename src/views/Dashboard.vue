<template>
  <div>
    <h1>환율 계산</h1>
    송금국가: 미국(USD)<br />
    <label for="nations">수취국가: </label>
    <select v-model="selectedCurrency" @change="handleChangeCurrency">
      <option
        v-for="nation in nations"
        :key="nation.currency"
        :value="nation.currency"
      >
        {{ nation.name }}({{ nation.currency }})
      </option>
    </select><br />
    환율: {{ exchangeRate }} {{ targetCurrency }}/{{ sourceCurrency }}<br/>
    송금액: 
    <input v-model="money" @keyup.enter="handleSubmit" /> USD<br/>
    <button  @click="handleSubmit">
      Submit
    </button><br/><br/>

    <div 
      v-if="displayText !== ''"
      :class="{ 'error' : isWrong }"
    >
      {{ displayText }}
    </div>    

  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { numberWithCommas } from '../util';

export default {
  data() {
    return {
      money: '',      
      selectedCurrency: '',
      nations: [
        { name: '한국', currency: 'KRW' },
        { name: '일본', currency: 'JPY' },
        { name: '필리핀', currency: 'PHP' },
      ],
      displayText: '',
      isWrong: false,
    };
  },
  created() {
    this.selectedCurrency = this.targetCurrency;
    this.$store.dispatch('fetchExchangeRate');
  },
  computed: {
    ...mapState([
      'sourceCurrency',
      'targetCurrency',
      'quotes'
    ]),
    ...mapGetters([
      'exchangeRate'
    ]),
    convertMoney() {      
      return Number(this.money * this.exchangeRate).toFixed(2);
    },
  },
  methods: {
    ...mapMutations([
      'SET_TARGET_CURRENCY'
    ]),
    handleSubmit() {
      this.isWrong = this.money === '' || this.money < 0  || this.money > 10000 || isNaN(Number(this.money));
      if (this.isWrong) {
        this.displayText = '송금액이 바르지 않습니다.';
        return;
      }
      this.displayText = `수취금액은 ${ numberWithCommas(this.convertMoney) } ${this.targetCurrency} 입니다.`;
    },
    handleChangeCurrency() {
      this.displayText = '';
      this.SET_TARGET_CURRENCY(this.selectedCurrency);
    },
  },
};
</script>

<style scoped>

</style>