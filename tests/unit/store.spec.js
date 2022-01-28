import { state, mutations }  from '@/store'

describe('Store Test', () => {

  it ('송금국가는 미국으로 고정입니다. 통화는 미국달러(USD)입니다.', () => {
    expect(state.sourceCurrency).toEqual('USD')
  })

  it ('수취금액을 입력하지 않거나', () => {
    mutations.SET_REMITTANCE(state, '');
    expect(state.remittance).toBe('')
  })

  it ('0보다 작은 금액이거나', () => {
    mutations.SET_REMITTANCE(state, -100);
    expect(state.remittance).toBeLessThanOrEqual(0)
  })

  it ('10,000 USD보다 큰 금액', () => {
    mutations.SET_REMITTANCE(state, 10001);
    expect(state.remittance).toBeGreaterThanOrEqual(10000)
  })

  it ('바른 숫자가 아니라면', () => {
    mutations.SET_REMITTANCE(state, 'A');
    expect(Number(state.remittance)).toBeNaN()
  })

  it ('0보다 크고 ~ 10,000 보다 작은 경우', () => {
    mutations.SET_REMITTANCE(state, 1000);
    expect(state.remittance).toBeGreaterThanOrEqual(0)
    expect(state.remittance).toBeLessThanOrEqual(10000)
  })


})