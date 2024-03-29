import styled from "styled-components";

export const ProjectsDivSection = styled.div`
  background: radial-gradient(#161616, #38353c);
  width: 100%;
  height: 62%;
  color: white;
  font-size: 1.4rem;
  p {
    margin-left: 20%;
    margin-top: 2%;
    opacity: 0.7;
  }
`;

export const ProjectsContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: 2% auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  img {
    width: 430px;
    height: auto;
  }

  span {
    padding: 2% 0 2% 0;
  }
`;

export const ModalApp = styled.div`
  position: fixed;
  background-color: rgb(230, 225, 225);
  border-radius: 25px;
  top: 10%;
  left: 30%;
  width: 40%;
  height: 85%;
  z-index: 21;
  p {
    justify-content: center;
    align-items: center;
    margin-top: 6%;
  }
  img {
    border-radius: 25px 25px 0 0;
  }
  @media (max-width: 1000px) {
    height: 80%;
    top: 17%;
  }
  @media (max-width: 1000px) {
    height: 80%;
    top: 17%;
  }
  @media (max-width: 790px) {
    width: 60%;
    left: 20%;
  }
  @media (max-width: 435px) {
    width: 80%;
    left: 10%;
  }
`;

export const ImageApp = styled.img``;

export const AppInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;

export const AppTechnologyContainer = styled.div`
  margin: 2% 0 2% 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  word-break: break-all;
`;

export const AppTechnology = styled.span`
  color: gray;

  font-size: 1rem;
  margin: 2% 5% 0% 5%;
`;

export const AppTitle = styled.span`
  font-size: 1.7rem;
  align-items: center;
  margin: 0% 0 2% 0;
`;

export const AppDescription = styled.span`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 1% 5% 2% 5%;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;

export const AppModalButton = styled.button`
  width: 40%;
  height: 50px;
  border-radius: 25px;

  background-image: linear-gradient(to right, purple, blue);
  color: white;

  font-size: 1.3rem;
  border: none;
  outline: none;

  transition: all 0.4s;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
