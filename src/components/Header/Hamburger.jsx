import React, { useCallback, useRef } from "react";
import styled from "styled-components";

const HamburguerContainer = styled.div`
  position: absolute;
  right: 10%;
`;

export default function Hamburger(props) {
  const handleAction = (e) => {
    e.preventDefault();
    props.hamburguerRef.current.classList.toggle("is-active");
    props.menuRef.current.classList.toggle("is-menu-active");
  };

  return (
    <HamburguerContainer>
      <button
        ref={props.hamburguerRef}
        className="hamburger hamburger--squeeze"
        type="button"
        onClick={(e) => handleAction(e)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </HamburguerContainer>
  );
}
