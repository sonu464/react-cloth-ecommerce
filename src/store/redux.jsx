import { createStore, combineReducers } from "redux";

const initialState = {
  data: [
    {
      full_name: "",
      title: "",
      profile_pic_url_proxy: "",
      followers: "",
      following: "",
      text: "",
      url: "",
    },
  ],
  showUserData: false,
};

const reducerFun = (state = initialState, action) => {
  if (action.type === "update") {
    return {
      ...state,
      data: action.value,
      showUserData: false,
    };
  }

  if (action.type === "show") {
    return {
      ...state,
      showUserData: action.show,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  yourReducer: reducerFun, // Replace 'yourReducer' with the actual name of your reducer
});

const store = createStore(rootReducer);

export default store;
