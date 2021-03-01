import {
  ModalForm,
  Form,
  Input,
  Textarea,
  Button,
} from "../styles/ContactDivSection";

import { sendForm } from "emailjs-com";

const ModalFormComponent = ({ funcToCheckForm, stateToAproveForm }) => {
  const onSubmit = (data) => {
    console.log(data);
    data.preventDefault();
    setTimeout(() => funcToCheckForm(true), 1000);
    // COLOCAR LOGICA EMAIL JAVASCRIPT AQUI
    sendForm(
      "contato_portfolio",
      "contato_portoflio",
      data.target,
      "user_mPU9p33FjIwjo8jm59LJf"
    )
      .then((res) => {
        console.log(res.text);
      })
      .catch((res) => console.log(res.text));
  };

  return (
    <ModalForm>
      <header>É só preencher os dados !</header>
      <Form onSubmit={onSubmit} className="contact-form">
        <label for="name" class="hidden-model">
          Nome completo
        </label>
        <Input type="text" name="name" required />

        <label for="email" class="hidden-model">
          email
        </label>
        <Input type="email" name="email" r required />

        <label for="Mensagem," class="hidden-model">
          Mensagem
        </label>
        <Textarea
          placeholder="Mensagem"
          class="input-model"
          name="message"
        ></Textarea>
        <Button type="submit" value="Enviar">
          Enviar
        </Button>
        {stateToAproveForm && (
          <p>{`Prontinho! Já vou entrar em contato com você! :)`}</p>
        )}
      </Form>
    </ModalForm>
  );
};

export default ModalFormComponent;
