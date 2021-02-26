import { useState } from "react";
import { LogoDiv, Menu, NavBarDivSection } from "../styles/NavBarDivSection";

const NavBar = () => {
  const [showBar, setShowBar] = useState("0");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      setShowBar("-70px");
    } else {
      setShowBar("0");
    }
    prevScrollpos = currentScrollpos;
  };

  return (
    <NavBarDivSection style={{ top: `${showBar}` }}>
      <LogoDiv>{/*LOGO*/}</LogoDiv>
      <Menu>
        <ul>
          <li>
            <a href="#start">{`<Ínicio/>`}</a>
          </li>
          <li>
            <a href="#projects">{`<Projetos/>`}</a>
          </li>
          <li>
            <a href="#aboutMe">{`<Sobre/>`}</a>
          </li>
          <li>
            <a href="#contacts">{`<Contatos/>`}</a>
          </li>
        </ul>
      </Menu>
    </NavBarDivSection>
  );
};

export default NavBar;
