import { createApp } from 'vue';
import Main from '@/components/Main.vue';

let vue;

beforeEach(() => {
  vue = createApp(Main)
  console.log(vue);
  console.log(vue._data);
})

describe('MainPage', () => {

  it('숫자가 아닌 Null 또는 문자열을 입력할 경우 결과값이 에러(NaN)인지 확인한다.', () => {
    // second = '가'
    // NaN값인 경우
    // expect(vm.plus(frist, second)).toBeNaN()
    // expect(vm.minus(frist, second)).toBeNaN()
    // expect(vm.multiply(frist, second)).toBeNaN()
    // expect(vm.divide(frist, second)).toBeNaN()
  })

  
  test('수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 보여줍니다. ', () => {
    let inputMoney = '';
    expect(inputMoney).toBe('');
    inputMoney = 10000;
    expect(inputMoney).toBeGreaterThanOrEqual(0) // 0보다 큰지
    expect(inputMoney).toBeLessThanOrEqual(10000) // 10000보다 작은지
    // inputMoney === '' || inputMoney < 0  || inputMoney > 10000 || isNaN(Number(inputMoney));

    // expect(inpu).toBe('Hello World');
  });

  
  // test('버튼을 클릭했을때, inputMoney는 0~10 사이에 위치한 숫자여야 한다.', () => {
  //   const wrapper = mount(RandomNumber)
  //   wrapper.find('button').trigger('click') // 버튼을 찾아서 이벤트를 발동
  //   await wrapper.vm.$nextTick() // 비동기로 DOM이 업데이트 될떄까지 기다린다.
  //   const randomNumber = parseInt(wrapper.find('span').element.textContent) // 랜덤값

  //   expect(randomNumber).toBeGreaterThanOrEqual(1) // matchers를 이용해 1보다 큰지
  //   expect(randomNumber).toBeLessThanOrEqual(10) // matchers를 이용해 10보다 작은지
  // })

  // it('환율 정보가 없다면 ?', () => {    

  //   const state = {}
  //   const getters = {}
  //   const mutations = {}
  //   const actions = {}

  //   const store = createStore({
  //     state,
  //     getters,
  //     mutations,
  //     actions
  //   });
    
    
  //   const msg = 'new message'
  //   const wrapper = shallowMount(MainPage, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
