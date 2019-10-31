import { Dispatch } from "redux";

import { USER_CREATE, createUserTypes } from "../actions/types";

import { UserType } from "../types/user";

export const createUser = (user: UserType) => async (dispatch: Dispatch) => {
  const newUser: UserType = {
    id: user.id,
    name: user.name,
    age: user.age
  };

  const dispatcher: createUserTypes = {
    type: USER_CREATE,
    payload: newUser
  };

  dispatch(dispatcher);
};
