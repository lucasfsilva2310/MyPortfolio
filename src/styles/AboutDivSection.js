import styled from "styled-components";

export const AboutDivSection = styled.div`
  background: #1e1e1f;
  width: 100%;
  height: 62vh;
  margin: 0 auto;
  color: white;
  font-size: 1.4rem;
  p {
    margin-left: 20%;
    margin-top: 2%;
    opacity: 0.7;
  }
`;

export const CodeContainer = styled.div`
  border-left: 2px solid grey;
  margin-left: 20%;
  margin-top: 3%;
  width: 90%;
  height: 75%;
`;

export const CodeRow = styled.div`
  border: 1px solid red;
  width: 100%;
  margin-left: 2%;
  height: 1.7rem;
  font-size: 1rem;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  div:hover {
    background: #242425;
  }
`;

export const Declaration = styled.span`
  margin-left: 0.7%;
  color: rgb(34, 34, 236);
`;

export const Names = styled.span`
  margin-left: 0.7%;
  color: yellow;
`;

export const Signs = styled.span`
  margin-left: 0.7%;
  color: white;
`;
