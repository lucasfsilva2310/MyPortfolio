import { LogoDiv, Menu, NavBarDivSection } from "../styles/NavBarDivSection";

const NavBar = () => {
  return (
    <NavBarDivSection>
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
