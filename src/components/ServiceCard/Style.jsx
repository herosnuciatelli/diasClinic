import styled from "styled-components";

import Arrow from "../../assets/arrow.svg";

const CardImg = styled.div.attrs((props) => ({
    $background: props.$background,
  }))`
    width: 100%;
    height: 230px;
    max-width: 370px;
    max-height: 230px;
    filter: grayscale(1);
  
    background: url(${(props) => props.$background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  
    @media (max-width: 768px) {
      max-width: 100%;
    }
  `;
  
  const ServiceContainerCard = styled.div`
    position: relative;
    border: 1px solid #ebe6d6;
    width: 100%;
    max-width: 370px;
    display: grid;
    justify-items: center;
    grid-template-rows: 230px 20px 1fr 70px;

    &:hover {
      background: #fefae0;
    }
    &:hover ${CardImg} {
      filter: grayscale(0);
    }
  
    @media (max-width: 1024px) {
      width: 280px;
    }
  
    @media (max-width: 768px) {
      width: 100%;
      max-width: 100%;
    }
  `;
  const TimeContainer = styled.div`
    text-align: center;
    padding: 5px 15px;
    background-color: var(--third-color);
    width: max-content;
    margin: 0 auto;
    margin-top: -15px;
    z-index: 1;
    height: max-content;
  `;
  const Time = styled.span`
    color: #fff;
  `;
  const InfoContainer = styled.div`
    padding: 20px 5px;
    text-align: center;
  `;
  const CardTitle = styled.h2`
    font-size: 16px;
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-weight: 400;
  `;
  const CardPrice = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
  `;
  const CardContent = styled.div`
    padding: 0 15px;
  `;
  const CardButton = styled.a`
    cursor: pointer;
    color: var(--secundary-color);
    font-size: 15px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
  `;
  
  const Description = styled.p`
    font-size: 14px;
    font-weight: 300;
  `;
  
  const Benefits = styled.div`
    text-align: left;
    padding: 20px 0;
  `;
  const ContentTitle = styled.h3`
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.12em;
  `;
  
  const Benefit = styled.li`
    margin: 10px 0;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    list-style: none;
  `;
  
  const ArrowIcon = styled.img`
    width: 10px;
  `;


export default {
    Arrow,
    ArrowIcon,
    CardImg,
    ServiceContainerCard,
    TimeContainer,
    Time,
    InfoContainer,
    CardTitle,
    CardPrice,
    CardContent,
    CardButton,
    Description,
    Benefits,
    ContentTitle,
    Benefit
}