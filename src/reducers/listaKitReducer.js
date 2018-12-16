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
    return {...state, kit: action.payload};    
    case "KITS_FECHED":      
      return {...state, kit: action.payload.data};
    case "KITBYID_LOADED":      
      return {...state, kit: action.payload.data};
    case "FIRST_KIT_LOADED":      
      return {...state, kit: action.payload.data.value};      
    case "JEWELS_FILTERED":        
    return {...state, kit: action.payload};
    default:
      return state;
  }
};
