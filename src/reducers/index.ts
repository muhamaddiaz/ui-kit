import { combineReducers } from "redux";

import { USER_CREATE, createUserTypes } from "../actions/types";

export default combineReducers({
  greeting: () => ({
    sayHello: "Semangat Bangsat!"
  }),
  users: (state: any = [], action: createUserTypes) => {
    switch (action.type) {
      case USER_CREATE:
        return (state = [...state, action.payload]);
      default:
        return state;
    }
  }
});
