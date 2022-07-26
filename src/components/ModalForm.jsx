import {
  ModalForm,
  Form,
  Input,
  Textarea,
  Button,
  MessageForm,
} from "../styles/ContactDivSection";

import { sendForm } from "emailjs-com";

const ModalFormComponent = ({ funcToCheckForm, stateToAproveForm }) => {
  const onSubmit = (data) => {
    document.body.style.cursor = "wait";
    data.preventDefault();
    sendForm(
      "contato_portfolio",
      "contato_portoflio",
      data.target,
      "user_mPU9p33FjIwjo8jm59LJf"
    )
      .then((res) => {
        document.body.style.cursor = "default";
        funcToCheckForm(true);
      })
      .catch((res) => console.log(res.text));
  };

  return (
    <ModalForm>
      <Form onSubmit={onSubmit} className="contact-form">
        <header>Send me a message !</header>
        <label for="name" class="hidden-model">
          Full Name
        </label>
        <Input type="text" name="name" required />

        <label for="email" class="hidden-model">
          E-mail
        </label>
        <Input type="email" name="email" r required />

        <label for="Mensagem," class="hidden-model">
          Message
        </label>
        <Textarea
          placeholder="Mensagem"
          class="input-model"
          name="message"
        ></Textarea>
        <Button type="submit" value="Enviar">
          Send
        </Button>
        {stateToAproveForm && (
          <MessageForm>{`All done! I will get in touch with you :)`}</MessageForm>
        )}
      </Form>
    </ModalForm>
  );
};

export default ModalFormComponent;
