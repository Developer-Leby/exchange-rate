<template>
  <div>
    <h1>환율 계산</h1>
    송금국가: 미국(USD)<br />
    <label for="nations">수취국가: </label>
    <select v-model="target" @change="this.displayText = ''">
      <option
        v-for="nation in nations"
        :key="nation.currency"
        :value="nation.currency"
      >
        {{ nation.name }}({{ nation.currency }})
      </option>
    </select><br />
    환율: {{ exchangeRate }} {{ target }}/{{ source }}<br/>
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
import { mapState } from "vuex";
import { numberWithCommas } from "../util"

export default {
  data() {
    return {
      money: '',
      source: "USD",
      target: "KRW",
      nations: [
        { name: "한국", currency: "KRW" },
        { name: "일본", currency: "JPY" },
        { name: "필리핀", currency: "PHP" },
      ],
      displayText: '',
      isWrong: false,
    };
  },
  created() {
    this.$store.dispatch("fetchExchangeRate");
  },
  computed: {
    ...mapState([
      "quotes"
    ]),
    exchangeRate() {
      return Number(this.quotes[`${this.source}${this.target}`]).toFixed(2);
    },
    convertMoney() {      
      return Number(this.money * this.exchangeRate).toFixed(2);
    },
  },
  methods: {
    handleSubmit() {
      this.isWrong = this.money === '' || this.money < 0  || this.money > 10000 || isNaN(Number(this.money));
      if (this.isWrong) {
        this.displayText = '송금액이 바르지 않습니다.';
        return;
      }
      this.displayText = `수취금액은 ${ numberWithCommas(this.convertMoney) } ${this.target} 입니다.`    
    }
  },
};
</script>

<style scoped>

</style>