import { useRef } from 'react'
import {Header} from '../../components/Header/Index'
import { MainContainer } from '../../styles/Index'
import styled from 'styled-components'
import ServiceCard from '../../components/ServiceCard'
import { Element } from 'react-scroll'
import WppButton from "../../components/WppButton";
import Footer from "../../components/Footer"

const ServiceBanner = styled.div.attrs(props => ({
  $bannerbackground: props.$bannerbackground
}))`
  width: 100%;
  min-height: 300px;
  height: 40vh;
  display: grid;
  place-items: center;
  background: var(--secundary-color);
  background-size: cover;
  background-position: center;
`
const BannerTitle = styled.h1`
  color: #fff;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 400;
`
const ServiceContainer = styled.div`
  padding: var(--padding-section-global);
  display:grid;
  grid-template-columns: repeat(3, minmax(min(290px, 100%), 1fr));
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(min(270px, 100%), 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

import {Services as ServicesContent} from "../../content/json/components-mock.json";


export default function Services() {
  const mainContainerRefServices = useRef(null);

  return (
    <>
      <Header mainContainerRefServices={mainContainerRefServices}/>
      <MainContainer ref={mainContainerRefServices}>
        {ServicesContent[0].Banners.map((banner => (
          <div key={banner.bannerTitle}>
            <Element name={banner.bannerTitle}>
              <ServiceBanner>
                <BannerTitle>{banner.bannerTitle}</BannerTitle>
              </ServiceBanner>

              <ServiceContainer>
                {ServicesContent[1].Cards[`${banner.bannerTitle}`].map((card) => (
                  <ServiceCard 
                    cardTitle={card.cardTitle} 
                    time={card.time}
                    price={card.price}
                    background={card.background}
                    description={card.description}
                    benefits={card.benefits}
                    key={card.cardTitle}
                    list={card.list}
                  />
                ))}
              </ServiceContainer>
            </Element>
          </div>
        )))}

      </MainContainer>
      <Footer />
      <WppButton />
    </>
  )
}