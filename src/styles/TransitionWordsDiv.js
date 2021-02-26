import styled from "styled-components";

export const TransitionWordsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TransitionWords = styled.div`
  position: relative;
  text-indent: 10px;
  /* border: 2px solid yellow; */
  font-size: 3rem;
  margin-left: 1%;

  margin-bottom: 0rem;

  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.8);

  //instructions for when I want to reactivate the animations:
  // - delete the strong tag
  // - uncomment the spans tags
  // - add the right words for type os jobs I do

  @media (max-width: 990px) {
    strong {
      margin-right: 8.7rem;
      margin-top: 3.5rem;
    }
  }
  //From down here there are all the animations precoded
  .words {
    font-size: 1em;
    opacity: 0;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .w1 {
    -webkit-animation: w1anim 20s infinite;
    animation: w1anim 20s infinite;
  }

  .w2 {
    -webkit-animation: w2anim 20s infinite;
    animation: w2anim 20s infinite;
  }

  .w3 {
    -webkit-animation: w3anim 20s infinite;
    animation: w3anim 20s infinite;
  }

  .w4 {
    -webkit-animation: w4anim 20s infinite;
    animation: w4anim 20s infinite;
  }

  .w5 {
    -webkit-animation: w5anim 20s infinite;
    animation: w5anim 20s infinite;
  }

  //transictions
  @keyframes w1anim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
  }

  @keyframes w2anim {
    20% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
  }

  @keyframes w3anim {
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
  }

  @keyframes w4anim {
    60% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
  }

  @keyframes w5anim {
    80% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 636px) {
    margin-left: 0rem;
  } ;
`;
