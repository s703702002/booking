import React from "react";
import styled from "styled-components";

const Container = styled.div`
  label {
    display: inline-block;
    margin: 0 10px;
    > input {
      margin-right: 5px;
    }
  }
`;

const SwitchTransport = ({ onChange }) => {
  return (
    <Container>
      <label>
        <input
          type="radio"
          name="transportation"
          value="THSR"
          onChange={e => onChange(e.target.value)}
        />
        THSR
      </label>
      <label>
        <input
          type="radio"
          name="transportation"
          value="TRA"
          onChange={e => onChange(e.target.value)}
        />
        TRA
      </label>
    </Container>
  );
};

export default SwitchTransport;
