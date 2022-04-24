import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  StyledHome,
  Header,
  HeaderOverlay,
  TextContainer,
  ButtonContainer,
  OurMission,
  FeaturesContainer,
  FeatureTextContainer,
  FeatureIcons,
  Mission,
  Portfolio,
  GetInTouch,
  Explore,
  Overlay,
  ImageGallery,
  GalleryTextContainer,
  TextGroup,
  FirstItem,
  SecondItem,
  ThirdItem,
} from "../styles/homeStyle";
import camera from "../../assets/images/camera.png";
import portfolio from "../../assets/images/portfolio.png";
import getintouch from "../../assets/images/getintouch.png";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header>
        <HeaderOverlay>
          <Container>
            <TextContainer>
              <p>Experience the world through my lens</p>
              <h2>
                Adventure <span>awaits</span>
              </h2>
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

      {/* Mission */}

      <OurMission>
        <Container>
          <p>01 // OUR MISSION</p>
          <h2>
            <span>Stand out </span>and get noticed
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
      </OurMission>

      {/* Features */}

      <FeaturesContainer>
        <Container>
          <FeatureTextContainer>
            <p>02 // Essential features</p>
            <h2>Everything you need</h2>
          </FeatureTextContainer>
          <FeatureIcons>
            <Mission>
              <img src={camera} className="img-fluid" alt="Responsive " />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                recusandae.
              </p>
              <Button>Learn More</Button>
            </Mission>
            <Portfolio>
              <img src={portfolio} className="img-fluid" alt="Responsive " />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                recusandae.
              </p>
              <Button>Learn More</Button>
            </Portfolio>
            <GetInTouch>
              <img src={getintouch} className="img-fluid" alt="Responsive " />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
                recusandae.
              </p>
              <Button>Learn More</Button>
            </GetInTouch>
          </FeatureIcons>
        </Container>
      </FeaturesContainer>

      {/* Explore */}
      <Explore>
        <Overlay>
          <Container>
            <p>Journey is the destination</p>
            <h2>Explore nature's wonders</h2>
          </Container>
        </Overlay>
      </Explore>

      {/* ImageGallery */}
      <ImageGallery>
        <Container>
          <GalleryTextContainer>
            <h1>
              Every image tells a <span>story</span>
            </h1>
          </GalleryTextContainer>
          <TextGroup>
            <FirstItem>
              <h2>Beautiful galleries</h2>
              <p>
                I’m a text box. Double click me to edit the text or to change
                the way I look. I’m a text box. Double click me to edit the text
                or to change the way I look.
              </p>
            </FirstItem>
            <SecondItem>
              <h2>100s of sections</h2>
              <p>
                I’m a text box. Double click me to edit the text or to change
                the way I look. I’m a text box. Double click me to edit the text
                or to change the way I look.
              </p>
            </SecondItem>
            <ThirdItem>
              <h2>Easy to customize</h2>
              <p>
                I’m a text box. Double click me to edit the text or to change
                the way I look. I’m a text box. Double click me to edit the text
                or to change the way I look.
              </p>
            </ThirdItem>
          </TextGroup>
        </Container>
      </ImageGallery>
    </StyledHome>
  );
};

export default Home;
