import React from "react";
import { Container } from "react-bootstrap";
import {
  StyledFooter,
  SocialMediaIcons,
  BrandIcon,
  NavLinks,
} from "../styles/footerStyle";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/insta.png";
import brand from "../../assets/images/brand.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialMediaIcons>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} className="img-fluid" alt="Responsive icons" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={insta} className="img-fluid" alt="Responsive icons" />
          </a>
        </SocialMediaIcons>
        <BrandIcon>
          <Link to="/">
            <img src={brand} className="img-fluid" alt="Responsive icons" />
          </Link>
          <p>KODA JOHNSON</p>
        </BrandIcon>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </NavLinks>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
