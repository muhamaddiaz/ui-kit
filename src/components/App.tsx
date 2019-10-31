import React from "react";

import { connect } from "react-redux";
import { createUser } from "../actions";
import { UserType } from "../types/user";

import Card from "./commons/Card/Card";

interface Props {
  createUser: (user: UserType) => Promise<void>;
}

const App: React.FC<Props> = ({ createUser }) => {
  return (
    <div>
      <h1>Hello TypeScript!</h1>

      <button
        onClick={() => {
          createUser({
            id: 1301164135,
            name: "Muhamad Diaz",
            age: 21
          });
        }}
      >
        Click Me
      </button>
      <br />
      <Card />
    </div>
  );
};

export default connect(
  (state: any) => ({
    users: state.users
  }),
  {
    createUser
  }
)(App);
