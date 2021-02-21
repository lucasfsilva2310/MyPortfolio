import styled from "styled-components";

export const ContactDivSection = styled.div`
  width: 99.2vw;
  height: 30vh;
  background: #161616;
  color: white;
  font-size: 1.6rem;
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
    text-decoration: none;
  }
  p {
    margin: 3% 0 3% 0;
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
  }
  span {
    margin-left: 2%;
  }
`;
