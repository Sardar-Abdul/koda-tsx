import styled from "styled-components";
import forest from "../../assets/images/forest.jpeg";

export const StyledAbout = styled.div``;
export const Header = styled.div`
  min-height: 85vh;
  background-image: url(${forest});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  overflow: hidden;
`;
export const HeaderOverlay = styled.div`
  width: 100%;
  height: 85vh;
  background: rgb(0, 0, 0, 0.4);

  .container {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;

    @media (max-width: 1399.98px) {
      width: 100%;
    }
  }
`;
export const TextContainer = styled.div`
  width: 80%;

  @media (max-width: 991.98px) {
    width: 100%;
  }
  p {
    color: rgb(222, 230, 0);
    margin: 0;
    font-weight: 500;

    @media (max-width: 443px) {
      font-size: 15px;
    }
  }
  h2 {
    color: white;
    font-size: 4rem;
    width: 70%;
    font-weight: 500;

    @media (max-width: 767.98px) {
      width: 100%;
    }

    @media (max-width: 443px) {
      font-size: 3rem;
    }
  }
  h6 {
    font-size: 18px;
    color: white;
    width: 60%;
    text-align: justify;
    font-weight: 300;
    @media (max-width: 767.98px) {
      width: 80%;
    }
    @media (max-width: 420px) {
      width: 90%;
    }
  }
`;
export const ButtonContainer = styled.div`
  width: 80%;

  @media (max-width: 991.98px) {
    width: 100%;
  }

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

//STORY
export const MyStory = styled.div`
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 991.98px) {
      min-height: 130vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    @media (max-width: 767.98px) {
      min-height: 170vh;
      min-height: 130vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    @media (max-width: 420px) {
      min-height: 130vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    p {
      width: 60%;
      text-align: justify;
      color: rgb(165, 162, 160);

      @media (max-width: 991.98px) {
        width: 100%;
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

      @media (max-width: 420px) {
        font-size: 35px;
      }
    }
    p:first-child {
      text-align: center;
      color: rgb(77, 79, 80);
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
  }
`;

//Gallery

export const Gallery = styled.div`
  min-height: 200vh;
  background-color: rgb(243, 243, 243);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GalleryText = styled.div`
  p {
    color: rgb(184, 185, 185);
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding-top: 60px;
  }

  h2 {
    padding-bottom: 20px;
    font-size: 40px;
    color: rgb(77, 79, 80);
    font-weight: 400;
    text-align: center;
    span {
      color: rgb(222, 230, 0);
    }

    @media (max-width: 420px) {
      font-size: 30px;
    }
  }
`;
export const GalleryImages = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 10px;
  padding-bottom: 100px;

  img {
    height: 100%;
    width: 100%;
    overflow-x: hidden;

    :hover {
      cursor: pointer;
    }
  }
`;
