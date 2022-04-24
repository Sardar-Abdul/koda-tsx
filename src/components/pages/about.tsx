import React from "react";
import {
  StyledAbout,
  Header,
  HeaderOverlay,
  ButtonContainer,
  TextContainer,
  MyStory,
  Gallery,
  GalleryText,
  GalleryImages,
} from "../styles/aboutStyle";

import { Container, Button } from "react-bootstrap";

//images
import ocean from "../../assets/images/ocean.jpeg";
import forest from "../../assets/images/forest.jpeg";
import header from "../../assets/images/header.jpg";
import mountain from "../../assets/images/mountain.jpg";
import lake from "../../assets/images/lake.jpg";
import city from "../../assets/images/city.jpg";

const About: React.FC = () => {
  return (
    <StyledAbout>
      <Header>
        <HeaderOverlay>
          <Container>
            <TextContainer>
              <p>The world holds many wonders</p>
              <h2>A restless roaming spirit</h2>
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, totam. Sunt sapiente neque ea eius saepe, doloremque!
              </h6>
            </TextContainer>
            <ButtonContainer>
              <Button>Learn More</Button>
            </ButtonContainer>
          </Container>
        </HeaderOverlay>
      </Header>

      {/* MY STORY */}
      <MyStory>
        <Container>
          <p>02 // MY STORY</p>
          <h2>
            I am a <span>storyteller</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quam perspiciatis facilis ipsam quis, molestiae possimus officia in
            animi non inventore tempore provident repellat incidunt at maxime
            voluptate veritatis ratione ut eaque, soluta minima accusamus
            numquam. Dignissimos, ratione commodi? Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quam perspiciatis facilis ipsam quis, molestiae possimus officia in
            animi non inventore tempore provident repellat incidunt at maxime
            voluptate veritatis ratione ut eaque, soluta minima accusamus
            numquam. Dignissimos, ratione commodi? Culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quam perspiciatis facilis ipsam quis, molestiae possimus officia in
            animi non inventore tempore provident repellat incidunt at maxime
            voluptate veritatis ratione ut eaque, soluta minima accusamus
            numquam. Dignissimos, ratione commodi? Culpa.
          </p>
        </Container>
      </MyStory>

      {/* Gallery */}
      <Gallery>
        <Container>
          <GalleryText>
            <p>03 // GALLERY</p>
            <h2>
              A picture is worth a <span>thousand</span> words
            </h2>
          </GalleryText>
          <GalleryImages>
            <img src={ocean} className="img-fluid" alt="Responsive " />
            <img src={forest} className="img-fluid" alt="Responsive " />
            <img src={header} className="img-fluid" alt="Responsive " />
            <img src={mountain} className="img-fluid" alt="Responsive " />
            <img src={city} className="img-fluid" alt="Responsive " />
            <img src={lake} className="img-fluid" alt="Responsive " />
          </GalleryImages>
        </Container>
      </Gallery>
    </StyledAbout>
  );
};

export default About;
