import axios from 'axios'
import {totalsProcess} from '../businessLayer/listaKit'

const BASE_URL = 'https://jewels-api.herokuapp.com/api/jewels'

export const actjewelSell = (indexJewel, kit) => {  
  let jewelUpdate = kit.jewels[indexJewel].isSold == false ? true : false
  let kitUpd = {
     ...kit, jewels: 
     [
       ...kit.jewels.slice(0, indexJewel),  // update array state: antes do registro selecionado
       {
         ...kit.jewels[indexJewel],
         isSold: jewelUpdate
       },
       ...kit.jewels.slice(indexJewel + 1), // update array state: depois do registro selecionado
     ] 
  }   
  // Load totals  
  kitUpd = totalsProcess(kitUpd)  // Load totals
  console.log(kitUpd)
  // Using Multi Middleware in order to update interface first then update base.
  return [    
    {type: "JEWEL_CHANGED", payload: kitUpd},
    actUpdateKitBase(kitUpd),    
  ]   
}

const actUpdateKitBase = (kit) => {
  return dispatch => {
    axios.put(`${BASE_URL}/${kit._id}`, {...kit})
      .then(resp => dispatch(actGetFirstKit()))
  }  
}

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