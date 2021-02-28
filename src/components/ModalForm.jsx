import {
  ModalForm,
  Form,
  Input,
  Textarea,
  Button,
} from "../styles/ContactDivSection";

import { useForm } from "react-hook-form";

const ModalFormComponent = ({ funcToCheckForm, stateToAproveForm }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => funcToCheckForm(true), 1000);
    // COLOCAR LOGICA EMAIL JAVASCRIPT AQUI
  };

  return (
    <ModalForm>
      <header>É só preencher os dados !</header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label for="nome" class="hidden-model">
          Nome completo
        </label>
        <Input type="text" name="name" ref={register} required />

        <label for="email" class="hidden-model">
          email
        </label>
        <Input type="email" name="email" ref={register} required />

        <label for="Mensagem," class="hidden-model">
          Mensagem
        </label>
        <Textarea
          placeholder="Mensagem"
          class="input-model"
          name="message"
          ref={register}
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
