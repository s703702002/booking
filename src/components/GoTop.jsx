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

function GoTop({ ...props }) {
  const isShow = useGoTop();
  const showObj = {
    display: "block"
  };

  return (
    <button style={isShow ? showObj : null} onClick={scrollTop} {...props}>
      TOP
    </button>
  );
}

const StyledGoTop = styled(GoTop)`
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
  display: none;
`;

export default StyledGoTop;
