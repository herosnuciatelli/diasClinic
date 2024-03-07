import styled from "styled-components";
import { useState } from "react";
import {cards_home_services, Services} from "../../content/json/components-mock.json"
import { useNavigate  } from "react-router-dom";
import { scroller } from "react-scroll";

const ServiceMenu = styled.div`
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 50vh;
  background-color: var(--primary-color);
  padding: 2% 30px;
  padding-bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, calc(100%/3));
  align-items: start;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

const ServiceOptions = styled.div`
  border-left: 1px solid #d8d1bd;
  padding-left: 20px;
  height: 100%;
  align-items: start;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`;
const ServiceOption = styled.li`
  text-transform: uppercase;
  font-weight: 400;
  color: var(--secundary-color);
  font-size: 15px;
  cursor: pointer;
  list-style: none;
  margin-bottom: 25px;
  width: max-content;
  &:hover {
    text-decoration: underline;
  }
`;
const ServiceTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 400;
  color: var(--third-color);
  font-size: 16px;
  margin-bottom: 20px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding-left: 30px;
  padding-bottom: 30px;
`

const TooltipImg = styled.div.attrs(props => ({
    $background: props.$background
}))`
  width: 80%;
  height: 100%;
  background: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  filter: grayscale(1);
`;


export default function Tooltip() {
    const [option, setOption] = useState(0);
    const serviceData = Services[1].Cards;
    const [service, setService] = useState(serviceData.CONSULTATION);
    
    
  
    const handleOption = (index) => {
      setOption(index);
      switch (index){
        case 0: 
          setService(serviceData.CONSULTATION)
        break;
        case 1: 
        setService(serviceData.FACE)
        break;
        case 2: 
          setService(serviceData.HAIR)
        break;
        case 3:
          setService(serviceData["HAIR REMOVAL"]);
        break;
        case 4:
          setService(serviceData.BODY);
        break;
        case 5:
          setService(serviceData.MASSAGE);
        break;
      }
    }

    const scrollTo = (section) => {
        scroller.scrollTo(`${section}`, {
          duration: 500,
          smooth: true,
          containerId: "body",
          offset: -50,
        });
      };
    
      const navigate = useNavigate();
    
      const handle = async (e, bannerTitle) => {
        e.preventDefault();
    
        await navigate("/services");
    
        scrollTo(`${bannerTitle}`);
      };


  return (
    <ServiceMenu>
      <ServiceOptions>
        <ServiceTitle>Services</ServiceTitle>
        {cards_home_services.map((info, index) => (
            <ServiceOption onMouseOver={() => handleOption(index)} key={index} onClick={(e) => handle(e, info.bannerTitle)}>{info.title}</ServiceOption>
        ))}
      </ServiceOptions>
      <ServiceOptions style={{ borderRight: "1px solid #d8d1bd" }}>
        <ServiceTitle>{cards_home_services[option].title}</ServiceTitle>
        {service.map((service) => (
            <ServiceOption key={service.cardTitle} onClick={(e) => handle(e, cards_home_services[option].bannerTitle)}>{service.cardTitle}</ServiceOption>
        ))}
        
      </ServiceOptions>
      <ImgContainer>
        <TooltipImg $background={cards_home_services[option].background}></TooltipImg>
      </ImgContainer>
    </ServiceMenu>
  );
}
