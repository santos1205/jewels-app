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
      console.log("JEWEL CHANGED");
      return state;
    case "KITS_FECHED":
      console.log("KITS_FECHED");
      return {...state, kit: action.payload.data};
    case "KIT_LOADED":
      console.log("KIT_LOADED");
      return {...state, kit: action.payload.data};
      case "FIRST_KIT_LOADED":
      console.log("FIRST_KIT_LOADED");
      return {...state, kit: action.payload.data.value};      
    default:
      return state;
  }
};
