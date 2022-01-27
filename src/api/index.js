import axios from 'axios'
import router from '../routes/router'

const DOMAIN = 'http://api.currencylayer.com'
const ACCESS_KEY = 'a1c74f5c81847b0ea373f60662e645f0'

const instance = axios.create({ baseURL: DOMAIN })

const request = (method, url, data) => {
  const api = method === 'GET' ? instance.get(url, { params: data }) : instance.post(url, data)
  return api
    .then(result => {
      const { error } = result.data    
      if (error) throw result
      return result.data
    })
    .catch(result => {
      if (result.response) {
        const { statusText } = result.response
        return onErrorPage(statusText)
      } else {
        const { error } = result.data
        return onErrorPage(error.info)
      }
    })
}

const onErrorPage = (message) => {
  router.push({ path: '/error', name: 'Error', params: { message: message } })
}

export const exchangeRate = {
  fetch() {
    return request('GET', '/live', { access_key: ACCESS_KEY })
  }
}