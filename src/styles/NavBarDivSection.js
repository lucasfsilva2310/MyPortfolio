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
`;

export const Menu = styled.nav`
  width: 35%;
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
`;

export const LogoDiv = styled.div`
  color: white;
  width: 25%;
`;
