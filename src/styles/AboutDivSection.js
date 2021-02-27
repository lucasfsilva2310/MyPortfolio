import styled from "styled-components";

export const AboutDivSection = styled.div`
  /* border: 2px solid red; */
  background: #1e1e1f;
  width: 100%;
  height: 62%;
  margin: 0 auto;
  padding-bottom: 2%;
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
  /* border: 1px solid red; */
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

export const CodeLineNumber = styled.span`
  color: white;
  /* border-right: 1px solid grey; */
  /* padding-right: 1%; */
`;

export const Declaration = styled.span`
  color: rgb(51, 126, 177);
  font-style: italic;
  font-weight: 400;
`;

export const Names = styled.span`
  color: rgb(236, 224, 52);
  font-weight: 800;
`;

export const Signs = styled.span`
  color: rgb(207, 204, 204);
`;

export const Space = styled.span`
  margin-left: 0.7%;
`;

export const Comment = styled.span`
  color: grey;
`;

export const Emphasis = styled.span`
  color: rgb(196, 33, 33);
  font-weight: 500;
`;

export const VarName = styled.span`
  color: rgb(118, 250, 118);
`;

export const VarValues = styled.span`
  color: rgb(41, 160, 41);
  font-weight: 600;
`;

export const VarValueNumber = styled.span`
  color: orange;
`;

export const TickingSpan = styled.span`
  span {
    color: white;
    animation: ticking;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes ticking {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
