import React from "react";
import styled from "styled-components";
import desc from "../assets/desc.svg";
import asc from "../assets/asc.svg";
import exchange from "../assets/exchange.svg";

export const Desc = styled(({ ...props }) => (
  <img {...props} src={desc} alt="desc" />
))`
  width: 20px;
`;

export const Asc = styled(({ ...props }) => (
  <img {...props} src={asc} alt="asc" />
))`
  width: 20px;
`;

export const Exchange = () => (
  <img className="exchange" src={exchange} alt="exchange" />
);
