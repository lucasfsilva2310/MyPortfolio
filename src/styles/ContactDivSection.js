import styled from "styled-components";

export const ContactDivSection = styled.div`
  width: 100%;
  height: 30vh;
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
  width: 40vw;
  height: 20vh;
  margin: 2% auto auto 20%;
  display: flex;
  flex-direction: column;
  a {
    width: 60%;
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
  width: 30vw;
  height: 20vh;
  margin: 2% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 40%;
    height: 25%;
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
    height: 26%;
    font-size: 1.35rem;
  }
`;

export const ContactDiv = styled.div`
  /* width: 50px; */
  /* height: 5vh; */
  display: flex;
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
  background-color: #1e1e1f;
  border-radius: 25px;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 60%;
  z-index: 21;
`;
