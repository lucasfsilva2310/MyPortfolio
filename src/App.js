/* eslint-disable react/jsx-no-target-blank */
import "./reset.css";
import video from "./Videos/Coding Developer.mp4";

import HeadContent from "./components/HeadContent";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import MyContactsInfo from "./components/MyContactsInfo";

import { RootDiv } from "./styles/RootDiv";
import { ModalDiv } from "./styles/ContactDivSection";
import { useState } from "react";
import NavBar from "./components/NavBar";

import ModalForm from "./components/ModalForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [isFormOk, setIsFormOk] = useState(false);

  return (
    <>
      <video src={video} autoPlay muted loop id="myVideo" />
      {isOpen && (
        <ModalDiv
          onClick={() => {
            setIsFormOk(false);
            setIsOpen(false);
          }}
        ></ModalDiv>
      )}
      {isOpen && (
        <ModalForm funcToCheckForm={setIsFormOk} stateToAproveForm={isFormOk} />
      )}
      <NavBar />
      <HeadContent />
      <RootDiv>
        <MyProjects />
        <AboutMe />
        <MyContactsInfo funcToOpenModal={setIsOpen} />
      </RootDiv>
    </>
  );
}

export default App;
