import styled from "styled-components";

export const StyledFooter = styled.div`
  min-height: 40vh;
  background-color: rgb(0, 0, 0);

  .container {
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const SocialMediaIcons = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767.98px) {
    display: none;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;
export const BrandIcon = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
    padding-top: 5px;
  }
`;
export const NavLinks = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767.98px) {
    width: 40%;
  }

  @media (max-width: 575.98px) {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  a {
    text-decoration: none;
    color: white;

    :hover {
      color: rgb(222, 230, 0);
    }
  }
`;
