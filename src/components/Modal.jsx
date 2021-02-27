import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  TextInput,
} from "grommet";
import { useState } from "react";

import { ModalForm } from "../styles/ContactDivSection";

const ModalFormComp = ({ funcToCheckForm, stateToAproveForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <ModalForm>
      <Grommet>
        <Box fill align="center" justify="center">
          <Box width="medium" justify="center" margin={{ top: "large" }}>
            <Form
              onChange={(value) => console.log("Change", value)}
              onSubmit={(event) => {
                // JAVASCRIPT EMAIL VAI AQUI
                console.log("Submit", event.value, event.touched);
                funcToCheckForm(true);
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
              <Box direction="row" justify="between" margin={{ top: "xlarge" }}>
                <Button type="submit" label="Enviar" />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
      {stateToAproveForm && (
        <p>{`Prontinho! Já vou entrar em contato com você! :)`}</p>
      )}
    </ModalForm>
  );
};

export default ModalFormComp;
