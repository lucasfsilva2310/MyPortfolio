import styled from "styled-components";

export const MainDivSection = styled.div`
  border-left: 4px solid grey;
  margin: 10% auto 240px auto;
  padding-top: 2%;
  padding-bottom: 8%;
  width: 70%;
  height: 100%;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);
  color: white;

  h1 {
    font-size: 1.4rem;
    margin-left: 7%;
    margin-bottom: 5%;
    opacity: 0.7;
  }
  p {
    font-size: 3rem;

    margin-left: 2%;
  }

  @media (max-width: 825px) {
    p {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 665px) {
    p {
      font-size: 1.8rem;
    }
  }
`;

export const TextBox = styled.div`
  margin-top: 8%;
`;

export const CheckIt = styled.span`
  font-size: 1.4rem;
  margin-left: 2%;
  margin-top: 5%;
  opacity: 0.7;
`;
