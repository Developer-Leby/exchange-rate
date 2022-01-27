import { shallowMount } from '@vue/test-utils'
import MainPage from '@/views/MainPage.vue'
import { createStore } from 'vuex';

beforeEach(() => {
  
})

describe('MainPage.vue', () => {

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
    
    
    // const msg = 'new message'
    // const wrapper = shallowMount(MainPage, {
    //   props: { msg }
    // })
    // expect(wrapper.text()).toMatch(msg)
  // })
})
