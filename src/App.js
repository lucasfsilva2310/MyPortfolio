/* eslint-disable react/jsx-no-target-blank */
import "./reset.css";
import video from "./Videos/Coding Developer.mp4";

import HeadContent from "./components/HeadContent";
import MyProjects from "./components/MyProjects";
import AboutMe from "./components/AboutMe";
import MyContactsInfo from "./components/MyContactsInfo";

import { RootDiv } from "./styles/RootDiv";
import { ModalDiv, ModalForm } from "./styles/ContactDivSection";
import { useState } from "react";
import NavBar from "./components/NavBar";

import { grommet } from "grommet/themes";
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  TextInput,
} from "grommet";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  //colocar no component form depois
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

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
        <ModalForm>
          <Grommet>
            <Box fill align="center" justify="center">
              <Box width="medium" justify="center" margin={{ top: "large" }}>
                <Form
                  onChange={(value) => console.log("Change", value)}
                  onSubmit={(event) => {
                    console.log("Submit", event.value, event.touched);
                    setIsFormOk(true);
                  }}
                >
                  <FormField label="Nome" name="name">
                    <TextInput
                      name="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </FormField>
                  <FormField
                    label="Email"
                    name="email"
                    required
                    margin={{ top: "medium" }}
                  >
                    <MaskedInput
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FormField>
                  <FormField
                    label="Assunto"
                    name="subject"
                    required
                    margin={{ top: "large" }}
                  >
                    <TextInput
                      name="subject"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                    />
                  </FormField>
                  <Box
                    direction="row"
                    justify="between"
                    margin={{ top: "xlarge" }}
                  >
                    <Button type="submit" label="Enviar" />
                  </Box>
                </Form>
              </Box>
            </Box>
          </Grommet>
          {isFormOk && (
            <p>{`Prontinho! Já vou entrar em contato com você! :)`}</p>
          )}
        </ModalForm>
      )}
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
