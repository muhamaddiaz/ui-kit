import { combineReducers } from "redux";

export default combineReducers({
  greeting: () => ({
    sayHello: "Helloworld"
  })
});
