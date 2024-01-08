import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header/Index.jsx";
import { MainContainer } from "../../styles/Index";
import WppButton from "../../components/WppButton";
import Flower from "../../assets/Flower.svg";
import Maps from "../../components/Maps/Index";
import LocationPin from "../../assets/location-pin.jsx";
import Phone from "../../assets/phone.jsx";

import "swiper/css";

import ComponentsStyles from "./Style";
import Card from "../../components/Card";
import { Slide, Slider } from "../../components/Slider/Index";
import {
  cards_home_services,
  Images,
  HeroInfo,
  About,
  Winner,
  Location,
} from "../../content/json/components-mock.json";
import Picture from "../../components/Picture";
import Footer from "../../components/Footer";
import { Element } from "react-scroll";


export default function Home() {
  const [slidesPerView, setSlidesPerView] = useState(6);

  const settings = {
    slidesPerView: slidesPerView,
    loop: true,
  };

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setSlidesPerView(3);
    }
  }, [window.innerWidth]);

  const mainContainerRef = useRef(null);

  return (
    <div id="home">
      <Header mainContainerRef={mainContainerRef} />
      <MainContainer ref={mainContainerRef} className='closeTooltip'>
        <ComponentsStyles.Hero id="hero">
          <ComponentsStyles.HeroContainer>
            <ComponentsStyles.HeroContent>
              <ComponentsStyles.HeroContentWrapper>
                <ComponentsStyles.HeroTitle>
                  {HeroInfo.phrase}
                </ComponentsStyles.HeroTitle>
                <ComponentsStyles.ButtonCTA
                  color="#fff"
                  $colorhover="var(--secundary-color)"
                >
                  Book Now
                </ComponentsStyles.ButtonCTA>
              </ComponentsStyles.HeroContentWrapper>
              <ComponentsStyles.Email>
                <a
                  href="mailto:"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {HeroInfo.email}
                </a>
              </ComponentsStyles.Email>
            </ComponentsStyles.HeroContent>
          </ComponentsStyles.HeroContainer>
        </ComponentsStyles.Hero>
        <Element name="aboutsection">
          <ComponentsStyles.History id="about">
            <ComponentsStyles.SectionTitle>
              History
            </ComponentsStyles.SectionTitle>
            <ComponentsStyles.HistoryContainer>
              <ComponentsStyles.Foto
                alt="foto"
                style={{
                  minWidth: "50%",
                  background: "green",
                  height: "400px",
                }}
              />
              <ComponentsStyles.HistoryContent>
                <ComponentsStyles.DescriptionTitle>
                  {About[0].title}
                </ComponentsStyles.DescriptionTitle>
                <ComponentsStyles.Description>
                  {About[0].description}
                </ComponentsStyles.Description>
                <ComponentsStyles.DescriptionTitle>
                  {About[1].title}
                </ComponentsStyles.DescriptionTitle>
                <ComponentsStyles.Description>
                  {About[1].description}
                </ComponentsStyles.Description>

                <ComponentsStyles.FlowerImg src={Flower} alt="flower" />
              </ComponentsStyles.HistoryContent>
            </ComponentsStyles.HistoryContainer>
          </ComponentsStyles.History>
        </Element>

        <ComponentsStyles.Services>
          <ComponentsStyles.SectionTitle>
            OUR SERVICES
          </ComponentsStyles.SectionTitle>
          <ComponentsStyles.ServicesContainer>
            {cards_home_services.map((card) => (
              <Card
                background={card.background}
                title={card.title}
                bannerTitle={card.bannerTitle}
                key={card.title}
              />
            ))}
          </ComponentsStyles.ServicesContainer>
        </ComponentsStyles.Services>

        <ComponentsStyles.Winner>
          <ComponentsStyles.WinnerContainer>
            <ComponentsStyles.WinnerContent>
              <ComponentsStyles.SectionTitle style={{ color: "#fff" }}>
                {Winner.title}
              </ComponentsStyles.SectionTitle>
              <ComponentsStyles.Description style={{ color: "#fff" }}>
                {Winner.description}
              </ComponentsStyles.Description>
              <ComponentsStyles.ButtonCTA
                color="#fff"
                $colorhover="var(--secundary-color)"
              >
                Book Now
              </ComponentsStyles.ButtonCTA>
            </ComponentsStyles.WinnerContent>
            <ComponentsStyles.WinnerImg src={Winner.image} />
          </ComponentsStyles.WinnerContainer>
        </ComponentsStyles.Winner>

        <Element name="locationsection" id="locations">
          <ComponentsStyles.Locations>
            <ComponentsStyles.LocationContainer>
              <ComponentsStyles.SectionTitle>
                Our location
              </ComponentsStyles.SectionTitle>
              <ComponentsStyles.LocationContent>
                <ComponentsStyles.MapsContainer>
                  <Maps />
                </ComponentsStyles.MapsContainer>
                <ComponentsStyles.AddressContent>
                  <ComponentsStyles.ContentTitle
                    style={{ marginBottom: "30px" }}
                  >
                    {Location.title}
                  </ComponentsStyles.ContentTitle>
                  <ComponentsStyles.InfoContainer>
                    <ComponentsStyles.InfoSpan
                      style={{
                        color: "var(--secundary-color)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <LocationPin color="var(--secundary-color)" /> {Location.address}
                    </ComponentsStyles.InfoSpan>
                  </ComponentsStyles.InfoContainer>
                  <div>
                    <ComponentsStyles.InfoSpan
                      style={{
                        color: "var(--secundary-color)",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Phone color="var(--secundary-color)" /> {Location.phone}
                    </ComponentsStyles.InfoSpan>
                  </div>

                  <ComponentsStyles.DescriptionLight
                    style={{ margin: "30px 0" }}
                  >
                    {Location.description}
                  </ComponentsStyles.DescriptionLight>
                  <ComponentsStyles.ButtonCTA
                    color="var(--secundary-color)"
                    $colorhover="#fff"
                  >
                    Book Now
                  </ComponentsStyles.ButtonCTA>
                </ComponentsStyles.AddressContent>
              </ComponentsStyles.LocationContent>
            </ComponentsStyles.LocationContainer>
          </ComponentsStyles.Locations>
        </Element>

        <ComponentsStyles.Pictures>
          <ComponentsStyles.PicturesContainer>
            <ComponentsStyles.SectionTitle>
              WE ARE FOR AESTHETIC PLEASURE
            </ComponentsStyles.SectionTitle>
          </ComponentsStyles.PicturesContainer>

          <Slider settings={settings}>
            {Images.map((image) => (
              <Slide key={image.img}>
                <Picture background={image.img} />
              </Slide>
            ))}
          </Slider>
        </ComponentsStyles.Pictures>
      </MainContainer>
      <Footer />
      <WppButton />
    </div>
  );
}
