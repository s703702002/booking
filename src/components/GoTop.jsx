import React, { useState, useEffect } from "react";
import styled from "styled-components";

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function useGoTop() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    function scroll() {
      if (window.scrollY > 200) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    }
    scroll();
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [setIsShow]);
  return isShow;
}

const StyledButton = styled.button`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1050;
  width: 45px;
  height: 45px;
  background: #eee;
  border-radius: 50%;
  text-align: center;
  padding: 0;
  display: ${({ isShow }) => (isShow ? "block" : "none")};
`;

function GoTop({ ...props }) {
  const isShow = useGoTop();

  return (
    <StyledButton isShow={isShow} onClick={scrollTop} {...props}>
      TOP
    </StyledButton>
  );
}

export default GoTop;
