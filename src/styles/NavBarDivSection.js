import styled from "styled-components";

export const NavBarDivSection = styled.div`
  width: 100%;
  height: 8%;

  position: fixed;
  top: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-image: linear-gradient(
    rgba(10, 10, 10, 0.9),
    rgba(10, 10, 10, 0.1)
  );

  transition: top 0.8s;

  z-index: 9;
`;

export const Menu = styled.nav`
  width: 45%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;

    font-size: 1.25rem;

    justify-content: space-around;
  }

  ul > li > a {
    text-decoration: none;
    color: white;
    transition: opacity 0.2s;
  }
  ul > li > a:hover {
    opacity: 0.7;
  }

  @media (max-width: 1110px) {
    width: 55%;
  }

  @media (max-width: 865px) {
    width: 65%;
  }
  @media (max-width: 730px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    ul {
      font-size: 1rem;
    }
  }
  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const LogoDiv = styled.div`
  color: white;
  width: 25%;
`;
