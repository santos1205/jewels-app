import axios from 'axios'

const BASE_URL = 'https://bkend-jewels.herokuapp.com/api/jewels'

export const actjewelSell = (id) => ({
  type: "JEWEL_CHANGED"  
});

export const actGetKits = () => {
  const request = axios.get(`${BASE_URL}`)  
  return {
    type: 'KITS_FECHED',
    payload: request
  }  
}

export const actGetKitById = (id) => {
  const request = axios.get(`${BASE_URL}/${id}`)  
  return {
    type: 'KITBYID_LOADED',
    payload: request
  }  
}

export const actGetFirstKit = () => {
  const request = axios.get(`${BASE_URL}/firstElem`)  
  return {
    type: 'FIRST_KIT_LOADED',
    payload: request
  }  
}