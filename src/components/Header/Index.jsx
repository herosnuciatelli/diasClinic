import { forwardRef, useEffect, useRef, useState } from "react";
import { Center } from "../../styles/Index";
import {
  Container,
  Navbar,
  GroupHeader,
  GroupItem,
  GroupLink,
  LogoContainer,
} from "./Style";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import Tooltip from "./Tooltip";
import { Whatsapp } from "../../content/json/components-mock.json"
import Logo from "../../assets/logo.png"


export const Header = forwardRef((props, ref) => {
  const menuRef = useRef(null);
  const hamburguerRef = useRef(null);

  const scrollTo = (section) => {
    scroller.scrollTo(`${section}`, {
      duration: 500,
      smooth: true,
      containerId: "body",
      offset: -50,
    });
  };

  const navigate = useNavigate();

  const handleAbout = async (e) => {
    e.preventDefault();

    await navigate("/");

    scrollTo("aboutsection");
  };

  const handleLocation = async (e) => {
    e.preventDefault();
    await navigate("/");

    scrollTo("locationsection");
  };

  const [isOpen, setIsOpen] = useState(false);
  const Service = useRef(null);
  
  useEffect(() => {
    if(Service.current) {
      Service.current.addEventListener('mouseover', () => {
        setIsOpen(true);
      });
    }
    if (props.mainContainerRef) {
      props.mainContainerRef.current.addEventListener('mouseover', () => {
        setIsOpen(false)
      })
    }
    if (props.mainContainerRefServices) {
      props.mainContainerRefServices.current.addEventListener('mouseover', () => {
        setIsOpen(false)
      })
    }
  }, [])


  return (
    <Container ref={ref}>
      <Center>
        <Navbar>
          <GroupHeader>
            <GroupItem>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="link"
                onClick={(e) => handleAbout(e)}
                onMouseOver={() => setIsOpen(false)}
              >
                About
              </ScrollLink>
            </GroupItem>
            <GroupItem>
              <GroupLink ref={Service}>
                Services
              </GroupLink>
            </GroupItem>
          </GroupHeader>
          <LogoContainer>
            <GroupLink href="/" onMouseOver={() => setIsOpen(false)}>
              <img
                src={Logo}
                alt="dias clinic logo"
                style={{ width: "80px" }}
              />
            </GroupLink>
          </LogoContainer>
          <GroupHeader>
            <GroupItem>
              <ScrollLink
                to="locations"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="link"
                onClick={(e) => handleLocation(e)}
                onMouseOver={() => setIsOpen(false)}
              >
                Location
              </ScrollLink>
            </GroupItem>

            <GroupItem>
              <GroupLink href={Whatsapp.link} target="_blanket" onMouseOver={() => setIsOpen(false)}>Book Now</GroupLink>
            </GroupItem>
          </GroupHeader>
          <Hamburger menuRef={menuRef} hamburguerRef={hamburguerRef} />
        </Navbar>
      </Center>
      <Menu menuRef={menuRef} hamburguerRef={hamburguerRef} />
      {isOpen && (
        <Tooltip />
      )}
    </Container>
  );
});
