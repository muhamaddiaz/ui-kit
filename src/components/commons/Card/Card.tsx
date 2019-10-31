import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  width: 30rem;
  border-radius: 1rem;
  background-color: red;
`;

const Card: React.FC = () => {
  return (
    <Wrapper>
      <h1>Cards</h1>
    </Wrapper>
  );
};

export default Card;
