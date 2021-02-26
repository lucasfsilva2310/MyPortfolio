/* eslint-disable react/jsx-no-target-blank */
import "./reset.css";
import video from "./Videos/Coding Developer.mp4";

import HeadContent from "./components/HeadContent";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import MyContactsInfo from "./components/MyContactsInfo";

import { NavBarDivSection, Menu, LogoDiv } from "./styles/NavBarDivSection";

import { RootDiv } from "./styles/RootDiv";
import { ModalDiv, ModalForm } from "./styles/ContactDivSection";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <video src={video} autoPlay muted loop id="myVideo" />
      {isOpen && <ModalDiv onClick={() => setIsOpen(false)}></ModalDiv>}
      {isOpen && <ModalForm>Oi</ModalForm>}
      <NavBar />
      <HeadContent />
      <RootDiv>
        <MyProjects />
        <AboutMe />
        <MyContactsInfo func={setIsOpen} />
      </RootDiv>
    </>
  );
}

export default App;
