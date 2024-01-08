import React from 'react'
import { Header } from '../../components/Header/Index'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import HomeStyle from '../home/Style'
import Looking from "../../assets/404.jpg"

const ErrorContainer = styled.div`
  padding: var(--padding-section-global);
  padding-right: 0;
  height: 80vh;
  display: grid;
  align-content: center;

  @media (max-width: 768px) {
    text-align: center;
    padding: var(--padding-section-global);
  }
`
const ErrorCode = styled.h3`
  font-size: 22px;
  letter-spacing: 0.15em;
  font-weight: 400;
`
const ErrorType = styled.h2`
  font-size: 28px;
  letter-spacing: 0.2em;
  font-weight: 500;
`
const ErrorDescription = styled.p`
  font-size: 18px;
  margin: 30px 0;
`

const LookingImg = styled.div.attrs(props => ({
  $background: props.$background
}))`
  width: 40%;
  height: 80vh;
  background: url(${props => props.$background});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export default function NotFound() {
  return (
    <>
      <Header />
      <MainContainer style={{display: "flex"}}>
        <ErrorContainer>
          <ErrorCode>ERROR 404</ErrorCode>
          <ErrorType>PAGE NOT FOUND!</ErrorType>
          <ErrorDescription>It looks like this the page you are trying to visit doesn't exist anymore.<br /> Please return to the home page or contact us.</ErrorDescription>
          <a href="/"><HomeStyle.ButtonCTA color="var(--secundary-color)" $colorhover="#fff">BACK TO HOME</HomeStyle.ButtonCTA></a>
        </ErrorContainer>

        <LookingImg $background={Looking}></LookingImg>
      </MainContainer>
      <Footer />
    </>
  )
}