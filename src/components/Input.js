import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  margin: 0px 20px 10px 20px;
  ::placeholder {
    font-size: 12px;
    color: grey;
  }
`;

const Error = styled.div`
  color: crimson;
  margin: 0px 20px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
`;

function Input({ error, ...props }) {
  return (
    <>
      {error && <Error>{error}</Error>}
      <StyledInput {...props} />
    </>
  );
}

export default Input;
