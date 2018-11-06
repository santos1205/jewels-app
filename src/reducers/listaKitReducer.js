const INITIAL_STATE = {
  kit: {
    _id: "",
    cod: "",
    jewels: [{
      _id: ""
    }]      
  }    
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "JEWEL_CHANGED":      
      let index = action.payload
      return {
        kit:{
          ...state.kit, jewels: 
          [
            ...state.kit.jewels.slice(0, index),  // update array state: antes do registro selecionado
            {
              ...state.kit.jewels[index],
              isSold: true
            },
            ...state.kit.jewels.slice(index + 1), // update array state: depois do registro selecionado
          ]
        }       
      };    
    case "KITS_FECHED":      
      return {...state, kit: action.payload.data};
    case "KITBYID_LOADED":      
      return {...state, kit: action.payload.data};
    case "FIRST_KIT_LOADED":      
      return {...state, kit: action.payload.data.value};      
    default:
      return state;
  }
};
