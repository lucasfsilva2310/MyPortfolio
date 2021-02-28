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
    width: 325px;
    height: auto;
  }
`;
