import axios from 'axios';
const instance = axios.create({
  baseURL: 'http://api.currencylayer.com/'
});

const access_key = 'a1c74f5c81847b0ea373f60662e645f0'
// const access_key = 'a1c74f5c81847b0ea373f606162e645f0' // Invalid Access Key Test

export const getExchangeRete = () => {
  return instance.get('live', { params: { access_key } })
}