import styled from "styled-components";

export const StyledContact = styled.div``;
export const ContactHeader = styled.div`
  min-height: 60vh;
  background-color: rgb(33, 33, 33);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767.98px) {
      height: 120vh;
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
  }
`;
export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: white;
    font-size: 20px;
    padding-top: 10px;
  }

  p {
    color: rgb(162, 161, 160);
    text-align: center;
    width: 80%;
    padding-top: 5px;
  }
`;
export const Call = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: white;
    font-size: 20px;
    padding-top: 10px;
  }

  p {
    color: rgb(162, 161, 160);
    text-align: center;
    width: 80%;
    padding-top: 5px;
  }
`;
export const Visit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: white;
    font-size: 20px;
    padding-top: 10px;
  }

  p {
    color: rgb(162, 161, 160);
    text-align: center;
    width: 80%;
    padding-top: 5px;
  }
`;

//LetsTalk

export const LetsTalk = styled.div`
  min-height: 80vh;
  display: flex;

  .container {
    height: 80vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767.98px) {
      height: 130vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    @media (max-width: 420px) {
      height: 100vh;
    }
  }
`;
export const TextContainer = styled.div`
  width: 40%;

  @media (max-width: 767.98px) {
    width: 100%;
  }

  h2 {
    font-size: 44px;
    font-weight: 400;
    color: rgb(77, 79, 80);
    span {
      color: rgb(222, 230, 0);
    }
    @media (max-width: 420px) {
      font-size: 35px;
    }
  }

  p:first-of-type {
    color: rgb(128, 128, 128);
    font-size: 18px;

    @media (max-width: 420px) {
      padding-top: 30px;
    }
  }
  p:last-of-type {
    color: rgb(171, 161, 166);
    font-weight: 300;
    text-align: justify;
    @media (max-width: 420px) {
      padding-top: 20px;
    }
  }
`;
export const FormContainer = styled.div`
  height: 60vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767.98px) {
    width: 100%;
  }
  .form-control {
    padding: 20px;
    border: none;
    border-bottom: 2px solid rgb(77, 79, 80);
    background: transparent;
  }
  .form-control:focus {
    border-bottom: 2px solid rgb(77, 79, 80);
    box-shadow: none;
  }
  .form-check-label {
    color: rgb(179, 167, 192);
    padding-bottom: 20px;
  }
  .form-check-input {
    box-shadow: none;
  }

  .form-check-input:checked {
    background-color: rgb(222, 231, 66);
    border-color: black;
    box-shadow: none;
  }
  Button {
    background-color: rgb(222, 230, 0);
    color: rgb(77, 79, 80);
    font-weight: 500;
    font-size: 18px;
    border: none;

    :hover {
      background-color: rgb(222, 218, 21);
      color: rgb(33, 33, 33);
      transition: 0.3s;
      border: none;
      font-weight: 500;
    }
  }
  .btn:focus {
    background-color: rgb(222, 230, 0);
    color: rgb(77, 79, 80);
    font-weight: 500;
    font-size: 18px;
    border: none;
    box-shadow: none;
  }
`;
