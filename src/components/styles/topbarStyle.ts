import styled from "styled-components";

export const StyledTopbar = styled.div`
  .container {
    min-height: 10vh;
    display: flex;
    justify-content: space-between !important;
    align-items: center;

    .navbar-brand {
      a {
        font-size: 30px !important;
        font-weight: 800;
        color: black !important;
        letter-spacing: 1px;
        text-decoration: none;
      }
    }
  }

  .navbar-nav {
    margin-left: auto;
  }

  .navbar-toggler {
    border: none;
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  .navbar-toggler-icon {
    width: 40px;
    height: 40px;
  }

  .navbar .navbar-collapse {
    text-align: center;
  }
  .nav-link {
    a {
      color: black !important;
      text-decoration: none;

      :hover {
        color: rgb(222, 230, 0) !important;
        transition: 0.5s;
      }
    }
  }
`;
