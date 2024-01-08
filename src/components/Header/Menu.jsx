import React, { useState } from "react";
import styled from "styled-components";
import { GroupLink } from "./Style";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { cards_home_services } from "../../content/json/components-mock.json";
import LeftArrow from "../../assets/left-arrow.svg";

const Container = styled.div`
  position: fixed;
  height: 100%;
  background: var(--primary-color);
  width: 100%;
  display: none;
`;
const GroupMenu = styled.div``;

const MenuList = styled.li`
  list-style: none;
  font-size: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #003626;
  height: 45px;
  line-height: 45px;
  padding: 0 30px;
  border-top: 1px solid #a8b89e;
`;

export default function Menu(props) {
  const handleCloseMenu = () => {
    const menu = props.menuRef.current;
    const hamburger = props.hamburguerRef.current;

    menu.classList.remove("is-menu-active");
    hamburger.classList.remove("is-active");
  };

  const scrollTo = (section) => {
    scroller.scrollTo(`${section}`, {
      duration: 500,
      smooth: true,
      containerId: "body",
      offset: -100,
    });
  };

  const navigate = useNavigate();

  const handle = async (e, bannerTitle, path) => {
    e.preventDefault();
    handleCloseMenu();
    await navigate(path);

    scrollTo(`${bannerTitle}`);
  };

  const [servicesMenuIsOpen, setServicesMenuIsOpen] = useState(false);

  const handleServicesMenu = (e) => {
    e.preventDefault();

    setServicesMenuIsOpen(true);
  };

  return (
    <Container ref={props.menuRef}>
      {!servicesMenuIsOpen && (
        <GroupMenu>
          <MenuList>
            <GroupLink onClick={(e) => handle(e, "aboutsection", "/")}>
              About
            </GroupLink>
          </MenuList>
          <MenuList>
            <GroupLink onClick={(e) => handleServicesMenu(e)}>
              Services
            </GroupLink>
          </MenuList>
          <MenuList>
            <GroupLink onClick={(e) => handle(e, "locationsection", "/")}>
              Locations
            </GroupLink>
          </MenuList>
          <MenuList>
            <GroupLink
              onClick={handleCloseMenu}
              href="https://wa.me/XXXXXXXXXXX"
              target="_blanket"
            >
              Book Now
            </GroupLink>
          </MenuList>
        </GroupMenu>
      )}
      {servicesMenuIsOpen && (
        <GroupMenu>
          <MenuList
            style={{ background: "var(--third-color)" }}
            onClick={() => setServicesMenuIsOpen(false)}
          >
            <GroupLink style={{display: "flex", justifyContent: "space-between"}}>Services  <img src={LeftArrow} alt="icon" style={{width: '15px'}}/></GroupLink>
          </MenuList>
          {cards_home_services.map((info) => (
            <MenuList key={info.bannerTitle}>
              <GroupLink
                onClick={(e) => handle(e, `${info.bannerTitle}`, "/services")}
              >
                {info.title}
              </GroupLink>
            </MenuList>
          ))}
        </GroupMenu>
      )}
    </Container>
  );
}
