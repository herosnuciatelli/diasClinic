import styled from "styled-components";
import LocationPin from "../../assets/location-pin.jsx";
import Phone from "../../assets/phone.jsx";
import Instagram from "../../assets/instagram.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import {Location, Whatsapp as WppNumber} from '../../content/json/components-mock.json'


const FooterPage = styled.footer`
  background: var(--secundary-color);
  width: 100%;
  padding: var(--padding-section-global);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const FooterText = styled.h3`
  font-size: 15px;
  color: #fff;
  font-weight: 300;
  text-transform: uppercase;
`;
const FooterContent = styled.div``;
const SocialMedias = styled.div`
  display: flex;
  cursor: pointer;
  align-items: start;
  gap: 10px;
  @media (max-width: 768px) {
    margin-top: 30px;
    justify-content: center;
    gap: 20px;
  }
`;

const SocialIcon = styled.img`
  width: 28px;
`

export default function Footer() {
  return (
    <FooterPage>
      <FooterContent>
        <FooterText>Dias Clinic</FooterText>
        <FooterText style={{ marginTop: "20px" }}>
          <LocationPin color="var(--primary-color)" /> {Location.address}
        </FooterText>
        <FooterText>
          <Phone color="var(--primary-color)" /> {Location.phone}
        </FooterText>
      </FooterContent>
      <SocialMedias>
          <a href="https://instagram.com/diasclinic" target="_blanket"><SocialIcon src={Instagram} alt="instagram" /></a>
          <a href={WppNumber.link} target="_blanket"><SocialIcon src={Whatsapp} alt="whatsapp" /></a>
      </SocialMedias>
    </FooterPage>
  );
}
