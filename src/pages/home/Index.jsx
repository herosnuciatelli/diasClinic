import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header/Index.jsx";
import { MainContainer } from "../../styles/Index";
import WppButton from "../../components/WppButton";
import Maps from "../../components/Maps/Index";
import LocationPin from "../../assets/location-pin.jsx";
import Phone from "../../assets/phone.jsx";
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
  Whatsapp,
  Pictures
} from "../../content/json/components-mock.json";
import Picture from "../../components/Picture";
import Footer from "../../components/Footer";
import { Element } from "react-scroll";
import Feedbacks from "./Feedbacks/Index.jsx";

export default function Home() {
  const [slidesPerView, setSlidesPerView] = useState(6);

  const settings = {
    slidesPerView: slidesPerView,
    loop: false,
  };

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setSlidesPerView(3);
    }
  }, []);

  const mainContainerRef = useRef(null);

  return (
    <div id="home">
      <Header mainContainerRef={mainContainerRef} />
      <MainContainer ref={mainContainerRef} className="closeTooltip">
        <ComponentsStyles.Hero id="hero">
          <ComponentsStyles.HeroContainer>
            <ComponentsStyles.HeroContent>
              <ComponentsStyles.HeroContentWrapper>
                <ComponentsStyles.HeroTitle>
                  {HeroInfo.phrase}
                </ComponentsStyles.HeroTitle>
                <a href={Whatsapp.link} target="_blanket">
                  <ComponentsStyles.ButtonCTA
                    color="var(--secundary-color)"
                    $colorhover="var(--primary-color)"
                  >
                    Book Now
                  </ComponentsStyles.ButtonCTA>
                </a>
              </ComponentsStyles.HeroContentWrapper>
              <ComponentsStyles.Email>
                <a
                  href="mailto:info@diasclinic.uk"
                  style={{ textDecoration: "none", color: "var(--primary-color)" }}
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
              ABOUT US
            </ComponentsStyles.SectionTitle>
            <ComponentsStyles.HistoryContainer>
              <ComponentsStyles.Foto
                alt="foto"
                style={{
                  width: "100%",
                }}
                src="images/history.jpg"
              />
              <ComponentsStyles.HistoryContent>
                <ComponentsStyles.DescriptionTitle>
                  {About.title}
                </ComponentsStyles.DescriptionTitle>

                {About.description.map((description) => (
                  <ComponentsStyles.Description key={description}>
                    {description}
                  </ComponentsStyles.Description>
                ))}
              </ComponentsStyles.HistoryContent>
            </ComponentsStyles.HistoryContainer>
          </ComponentsStyles.History>
        </Element>

        <Feedbacks />

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
              <a href={Whatsapp.link} target="_blanket">
                <ComponentsStyles.ButtonCTA
                  color="#fff"
                  $colorhover="var(--secundary-color)"
                >
                  Book Now
                </ComponentsStyles.ButtonCTA>
              </a>
            </ComponentsStyles.WinnerContent>
            <ComponentsStyles.WinnerTreatwell href="https://www.treatwell.co.uk/place/dias-clinic-notting-hill/" target="_blank"><ComponentsStyles.WinnerImg src={Winner.image} /></ComponentsStyles.WinnerTreatwell>
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
                      <LocationPin color="var(--secundary-color)" />{" "}
                      {Location.address}
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
                  <a href={Whatsapp.link} target="_blanket">
                    <ComponentsStyles.ButtonCTA
                      color="var(--secundary-color)"
                      $colorhover="#fff"
                    >
                      Book Now
                    </ComponentsStyles.ButtonCTA>
                  </a>
                </ComponentsStyles.AddressContent>
              </ComponentsStyles.LocationContent>
            </ComponentsStyles.LocationContainer>
          </ComponentsStyles.Locations>
        </Element>

        <ComponentsStyles.Pictures>
          <ComponentsStyles.PicturesContainer>
            <ComponentsStyles.SectionTitle>
              {Pictures.phrase}
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
