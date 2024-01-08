import React from "react";
import styled from "styled-components";

const ContainerImage = styled.div.attrs(props => ({
    // dynamic ones
    $background: props.$background
  }))`
  width: 320px;
  height: 320px;
  background: url(${(props) => props.$background});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export default function Picture(props) {
  var backgroundImg = props.background;

  return <a href="https://www.instagram.com/diasclinic/" target="_blanket">
    <ContainerImage $background={backgroundImg}></ContainerImage>
    </a>;
}
