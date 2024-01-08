import styled from "styled-components";

const Center = styled.div`
    display: grid;
    place-items: center;
`

const MainContainer = styled.main`
  @media (max-width: 768px) {
    text-align: center;
  }

`

export {
    Center,
    MainContainer
}