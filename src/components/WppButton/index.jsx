import React from "react";
import styled from "styled-components";
import Logo from "../../assets/whatsapp-logo.png";
import { Whatsapp } from "../../content/json/components-mock.json";

const WppContainer = styled.button`
  background-color: #25d366;
  border: none;
  padding: 8px 10px;
  border-radius: 16px;
  position: fixed;
  bottom: 10%;
  right: 5%;
  cursor: pointer;
  transition: 200ms;
  z-index: 1;
  &:hover {
    scale: 1.1;
  }

  @media (max-width: 768px) {
    right: 90%;
    transform: translateX(90%);
    bottom: 5%;
  }
`;

export default function WppButton() {
  return (
    <a href={Whatsapp.link} target="_blanket">
      <WppContainer>
        <img src={Logo} style={{ width: "30px" }} alt="wpp" />
      </WppContainer>
    </a>
  );
}
