import styled from "styled-components";
import header from "../../assets/images/header.jpg";
import mountain from "../../assets/images/mountain.jpg";

export const StyledHome = styled.div``;

//HEADER

export const Header = styled.div`
  min-height: 85vh;
  background-image: url(${header});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  overflow: hidden;
`;

export const HeaderOverlay = styled.div`
  width: 100%;
  height: 85vh;
  background: rgb(0, 0, 0, 0.5);

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  p {
    color: rgb(222, 230, 0);
    margin: 0;
    font-weight: 500;

    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 500;
    span {
      color: rgb(222, 230, 0);
    }
    @media (max-width: 767.98px) {
      font-size: 3rem;
    }
    @media (max-width: 575.98px) {
      font-size: 2.5rem;
    }
    @media (max-width: 420px) {
      font-size: 2.2rem;
    }
  }
  h6 {
    font-size: 18px;
    color: white;
    width: 50%;
    text-align: justify;
    font-weight: 300;

    @media (max-width: 991.98px) {
      width: 80%;
    }
    @media (max-width: 767.98px) {
      font-size: 15px;
      width: 90%;
    }
    @media (max-width: 575.98px) {
      width: 80%;
    }
  }
`;
export const ButtonContainer = styled.div`
  width: 80%;

  Button {
    font-size: 14px;
    color: black;
    background-color: rgb(222, 230, 0) !important;
    border: none;
    font-weight: 500;

    :hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.7);
      color: black;
    }
  }
  .btn:focus {
    color: black;
    outline: none;
    box-shadow: none;
  }
`;

//Mission

export const OurMission = styled.div`
  .container {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      width: 60%;
      text-align: justify;
      color: rgb(165, 162, 160);

      @media (max-width: 1199.98px) {
        width: 100%;
      }

      @media (max-width: 991.98px) {
        padding-top: 30px;
      }
      @media (max-width: 767.98px) {
        width: 100%;
      }
    }
    h2 {
      padding-bottom: 20px;
      font-size: 40px;
      color: rgb(77, 79, 80);
      span {
        color: rgb(222, 230, 0);
      }

      @media (max-width: 767.98px) {
        font-size: 32px;
      }

      @media (max-width: 420px) {
        font-size: 25px;
      }
    }
    p:first-child {
      text-align: center;
      color: rgb(77, 79, 80);
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
    p:nth-child(5) {
      padding-bottom: 40px;
    }
  }
`;

//Features

export const FeaturesContainer = styled.div`
  background-color: rgb(33, 33, 33);
  min-height: 90vh;

  .container {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
      min-height: 180vh;
    }
    @media (max-width: 420px) {
      min-height: 100vh;
    }
  }
`;
export const FeatureTextContainer = styled.div`
  h2 {
    color: white;
    font-size: 40px;

    @media (max-width: 420px) {
      font-size: 30px;
    }
  }
  p {
    color: rgb(144, 144, 144);
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    @media (max-width: 420px) {
      padding-top: 30px;
    }
  }
`;
export const FeatureIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 140vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 420px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const Mission = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    height: 60px;
    width: 60px;
  }

  p {
    color: rgb(144, 144, 144);
    width: 90%;
    text-align: center;
  }
  Button {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    color: rgb(222, 218, 21);
    font-weight: 500;

    :hover {
      background-color: rgb(222, 218, 21);
      color: rgb(33, 33, 33);
      transition: 0.3s;
      border: 1px solid black;
      font-weight: 500;
    }
  }
  .btn:focus {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    box-shadow: none;
    color: rgb(222, 218, 21);
    font-weight: 500;
  }
`;
export const Portfolio = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    height: 60px;
    width: 60px;
  }

  p {
    color: rgb(144, 144, 144);
    width: 90%;
    text-align: center;
  }
  Button {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    color: rgb(222, 218, 21);
    font-weight: 500;

    :hover {
      background-color: rgb(222, 218, 21);
      color: rgb(33, 33, 33);
      transition: 0.3s;
      border: 1px solid black;
      font-weight: 500;
    }
  }
  .btn:focus {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    box-shadow: none;
    color: rgb(222, 218, 21);
    font-weight: 500;
  }
`;
export const GetInTouch = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 420px) {
    padding-bottom: 30px;
  }

  img {
    height: 60px;
    width: 60px;
  }

  p {
    color: rgb(144, 144, 144);
    width: 90%;
    text-align: center;
  }
  Button {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    color: rgb(222, 218, 21);
    font-weight: 500;

    :hover {
      background-color: rgb(222, 218, 21);
      color: rgb(33, 33, 33);
      transition: 0.3s;
      border: 1px solid black;
      font-weight: 500;
    }
  }
  .btn:focus {
    background-color: rgb(33, 33, 33);
    border: 1px solid black;
    box-shadow: none;
    color: rgb(222, 218, 21);
    font-weight: 500;
  }
`;

//Explore

export const Explore = styled.div`
  min-height: 90vh;
  background-image: url(${mountain});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 100%;
  background: rgb(0, 0, 0, 0.4);
  height: 90vh;
  .container {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    p {
      color: rgb(222, 218, 21);
      font-size: 22px;
      font-weight: 500;
      margin: 0;
    }
    h2 {
      width: 80%;
      color: white;
      font-weight: 500;
      font-size: 80px;

      @media (max-width: 991.98px) {
        width: 100%;
        font-size: 70px;
      }

      @media (max-width: 767.98px) {
        font-size: 50px;
      }
      @media (max-width: 408px) {
        font-size: 40px;
      }
    }
  }
`;

//ImageGallery
export const ImageGallery = styled.div`
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767.98px) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 420px) {
      min-height: 70vh;
    }
  }
`;
export const GalleryTextContainer = styled.div`
  padding-top: 130px;
  width: 40%;
  align-self: flex-start;

  @media (max-width: 767.98px) {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 40px;
  }
  @media (max-width: 420px) {
    width: 100%;
    padding-top: 15px;
  }
  h1 {
    text-align: start;
    color: rgb(77, 79, 80);
    font-size: 50px;
    span {
      color: rgb(222, 218, 21);
    }
    @media (max-width: 767.98px) {
      font-size: 40px;
    }

    @media (max-width: 500px) {
      font-size: 25px;
      text-align: center;
    }
  }
`;

export const TextGroup = styled.div`
  width: 50%;

  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

export const FirstItem = styled.div`
  h2 {
    font-size: 24px;
    @media (max-width: 767.98px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  p {
    color: rgb(128, 120, 152);
    font-size: 15px;
    text-align: justify;
    width: 70%;

    @media (max-width: 767.98px) {
      text-align: justify;
      text-align-last: center;
      width: 100%;
      padding-top: 10px;
    }
  }
`;
export const SecondItem = styled.div`
  h2 {
    font-size: 24px;

    @media (max-width: 767.98px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  p {
    color: rgb(128, 120, 152);
    font-size: 15px;
    text-align: justify;
    width: 70%;

    @media (max-width: 767.98px) {
      text-align: justify;
      text-align-last: center;
      width: 100%;
      padding-top: 10px;
    }
  }
`;
export const ThirdItem = styled.div`
  h2 {
    font-size: 24px;

    @media (max-width: 767.98px) {
      text-align: center;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  p {
    color: rgb(128, 120, 152);
    font-size: 15px;
    text-align: justify;
    width: 70%;

    @media (max-width: 767.98px) {
      text-align: justify;
      text-align-last: center;
      width: 100%;
      padding-top: 10px;
    }
  }
`;
