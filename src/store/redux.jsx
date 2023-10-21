import { createStore, combineReducers } from "redux";

const initialState = {
  data: [
    {
      name: "",
      title: "",
      imgUrl: "",
      restaurant: "",
    },
  ],
};

const reducerFun = (state = initialState, action) => {
  if (action.type === "update") {
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};

const rootReducer = combineReducers({
  yourReducer: reducerFun, // Replace 'yourReducer' with the actual name of your reducer
});

const store = createStore(rootReducer);

export default store;
