import styled from "styled-components";

const Hero = styled.section`
  padding: var(--padding-section-global);
  background: url(images/heroBanner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;

  @media (max-width: 768px) {
    background: url(images/heroBannerMobile.jpg);
    background-position: bottom;
  }
`
const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
  align-items: center;

  @media (max-width:768px) {
    grid-template-columns: 100%;
    text-align: center;
  }
`

const HeroContent = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 50%;
  text-align: right;
  justify-items: right;

  @media (max-width:768px) {
    text-align: center;
    justify-items: center;
    grid-column-start: 1;
  }
`

const HeroTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.4rem;
`

const ButtonCTA = styled.button.attrs(props => ({
  $colorHover: props.$colorhover,
}))`
  border: 1px solid ${props => props.color};
  padding: 14px 32px;
  font-size: 13px;
  text-transform: uppercase;
  background: transparent;
  color: ${props => props.color};
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 100ms;
  width: max-content;
  height: max-content;

  &:hover {
    background: ${props => props.color};
    color: ${props => props.$colorhover};
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

const HeroContentWrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  gap: 20px;
  justify-items: right;
  @media (max-width:768px) {
    justify-items: center;
  }
`

const Email = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: end;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
`

const History = styled.section`
  padding: var(--padding-section-global);
  background: linear-gradient(to bottom, var(--primary-color) 65%, var(--third-color) 35%);
  @media (max-width: 768px) {
    text-align: center;
  }
`
const SectionTitle = styled.h2`
  font-size: var(--section-title-font-size);
  letter-spacing: 0.15em;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 40px;
`
const HistoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0;
  }
`
const HistoryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 3;
  }
`
const DescriptionTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 20px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`
const Description = styled.div`
  font-size: 16px;
  grid-column-start: 1;
  grid-column-end: 4;
  margin: 20px 0;
`

const FlowerImg = styled.img`
  margin-top: 60px;
  grid-column-start: 3;

  @media (max-width: 768px) {
    display: none;
  }
`

const Foto = styled.img`
  grid-column: 1/2;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
  }

`

const Services = styled.section`
  padding: var(--padding-section-global);
  background: var(--primary-color);

  @media (max-width: 768px) {
    padding: 5% 15px;
  }
`;

const ServicesContainer = styled.div`
  padding: 0% 10%;
  display: grid;
  grid-template-columns: repeat(3, minmax(min(50px,100%), 280px));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(min(50px,100%), 280px));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(min(50px,100%), 280px));
    padding: 0;
  }
`;


const Winner = styled.section`
  background-color: var(--secundary-color);
  padding: var(--padding-section-global);
`;

const WinnerContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    row-gap: 8px;
  }
`;

const WinnerContent = styled.div`
  width: 100%;
`;

const WinnerImg = styled.img`
  grid-column-start: 3;
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-column-start: 1;
    grid-row-start: 3;
  };
  @media (max-width: 768px) {
    grid-column-start: 1;
    grid-row-start: 1;
    width: 70%;
    max-width: 280px;
  }
`;

const Locations = styled.section`
  padding: var(--padding-section-global);
  background-color: var(--third-color);
`;
const LocationContainer = styled.div``;
const LocationContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    display: block;
  }
`;
const MapsContainer = styled.div`
  height: 500px;
  width: 55%;

  @media (max-width: 1024px) {
    width: 100%;
    height: 400px
  }
`;
const AddressContent = styled.div`
  background-color: var(--primary-color);
  width: 45%;
  padding: 25px 30px;

  @media (max-width: 1024px) {
    width: 100%;
    background: transparent;
  }
`;

const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;
const DescriptionLight = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

const InfoContainer = styled.div`
  margin-bottom: 8px;
`;

const InfoSpan = styled.span`
  color: var(--secondary-color);
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 500px) {
    font-size: 13px;
    justify-content: center;
  }
`;

const Pictures = styled.section`
  padding-bottom: 5%;
`;

const PicturesContainer = styled.div`
  padding: var(--padding-section-global);
  padding-bottom: 0;
`;


export default {
    Hero,
    HeroContainer,
    HeroContent,
    HeroContentWrapper,
    HeroTitle,
    ButtonCTA,
    Email,
    History,
    SectionTitle,
    HistoryContainer,
    HistoryContent,
    Description,
    DescriptionTitle,
    FlowerImg,
    Foto,
    Services,
    ServicesContainer,
    Winner,
    WinnerContainer,
    WinnerContent,
    WinnerImg,
    Locations,
    LocationContainer,
    LocationContent,
    MapsContainer,
    AddressContent,
    ContentTitle,
    DescriptionLight,
    InfoContainer,
    InfoSpan,
    Pictures,
    PicturesContainer
}