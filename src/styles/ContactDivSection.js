import styled from "styled-components";

export const ContactDivSection = styled.div`
  width: 100%;
  height: 30%;
  background: #161616;
  color: white;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin-top: 1%;
  }
`;

export const SocialMediasDiv = styled.div`
  width: 40%;
  height: 20%;
  margin: 2% auto auto 20%;
  display: flex;
  flex-direction: column;
  a {
    width: 50%;
    text-decoration: none;
  }

  a:hover {
    img {
      width: 55px;
    }
    span {
      font-size: 1.4rem;
    }
  }

  p {
    margin: 3% 0 3% 0;
    opacity: 0.7;
  }
`;

export const ButtonDiv = styled.div`
  width: 30%;
  margin: 2% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 40%;
    height: 27%;
    border-radius: 25px;
    background-image: linear-gradient(to right, purple, blue);
    color: white;
    font-size: 1.3rem;
    border: none;
    outline: none;
    transition: all 0.2s;
  }
  button:hover {
    filter: brightness(0.9);
    width: 42%;
    height: 28%;
    font-size: 1.35rem;
  }

  button:active {
    width: 38%;
    height: 22%;
    font-size: 1.2rem;
  }
  @media (max-width: 930px) {
    button {
      width: 170px;
    }
  }
  @media (max-width: 640px) {
    button {
      width: 130px;
    }
  }
`;

export const ContactDiv = styled.div`
  display: flex;

  height: 70px;
  flex-direction: row;
  align-items: center;
  color: purple;
  margin-top: 2%;
  word-break: break-all;
  font-size: 1.5rem;
  cursor: pointer;
  img {
    width: 50px;
    transition: all 0.2s;
  }

  span {
    margin-left: 2%;
    font-size: 1.3rem;
    transition: all 0.2s;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 20;
`;

export const ModalForm = styled.div`
  position: fixed;
  background-color: rgb(230, 225, 225);
  border-radius: 25px;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 60%;
  z-index: 21;
  p {
    justify-content: center;
    align-items: center;
    margin-top: 1%;
  }
  header {
    justify-content: center;
    align-items: center;
    margin: 2%;
    font-size: 1.5rem;
  }
`;

export const Form = styled.form`
  display: block;
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 62px 15px 65px 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

export const Input = styled.input`
  display: inline-block;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  margin-bottom: 17px;
  font-size: 15px;
  color: #1b3815;
  line-height: 1.2;
  font-weight: bold;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  min-height: 100px;
  max-height: 100px;
  width: 80%;
  max-width: 80%;
  min-width: 80%;
`;

export const Button = styled.button`
  padding: 0 20px;
  width: 160px;
  height: 42px;
  background-image: linear-gradient(to right, purple, blue);
  border-radius: 25px;
  font-size: 14px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
  padding-top: 5px;
  transition: all 0.4s;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    width: 165px;
    font-size: 1rem;
  }

  &:active {
    width: 155px;
    font-size: 0.95rem;
  }
`;
