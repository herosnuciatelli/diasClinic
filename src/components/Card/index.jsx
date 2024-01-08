import styled from "styled-components";

const ButtonServices = styled.button`
    height: max-content;
    padding: 12px 30px;
    background: var(--primary-color);
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    position: relative;
    cursor: pointer;
`
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 100ms;
`

const Container = styled.div.attrs(props => ({
    // dynamic ones
    $background: props.$background
  }))`
    background: url(${(props) => props.$background});
    height: 280px;
    display: flex;
    align-items: end;
    background-size: cover;
    position: relative;
    z-index: 0;
    &:hover ${ButtonServices}{
        background: transparent;
        color: #fff;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
    }

    &:hover ${Overlay} {
        background: rgba(0,0,0, 0.5)
    }

    @media (max-width:768px) {
        &:nth-child(3) {
            grid-column-start: 1;
            grid-column-end: 3;
        }
        height: 210px;
    }
`

import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";


export default function Card(props) {

    const scrollTo = (section) => {
        scroller.scrollTo(`${section}`, {
          duration: 500,
          smooth: true,
          containerId: "body",
          offset: -50,
        });
      };
    
      const navigate = useNavigate();
    
      const handle = async (e) => {
        e.preventDefault();
    
        await navigate("/services");
    
        scrollTo(`${props.bannerTitle}`);
      };


  return (
    <Container $background={props.background}>
        <Overlay></Overlay>
        <a href="/services" onClick={(e) => handle(e)}>
            <ButtonServices>{props.title}</ButtonServices>
        </a>
    </Container>
  )
}