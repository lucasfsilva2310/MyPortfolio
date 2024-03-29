import styled from 'styled-components'

export const AboutDivSection = styled.div`
  background: #1e1e1f;
  width: 100%;
  height: 62%;
  margin: 0 auto;
  padding-bottom: 2%;
  color: white;
  font-size: 1.4rem;
  p {
    margin-left: 2%;
    opacity: 0.7;
  }
`

export const CodeContainer = styled.div`
  border-left: 2px solid grey;
  margin-left: 20%;
  margin-top: 3%;
  height: 75%;
`

export const CodeRow = styled.div`
  margin-left: 2%;
  font-size: 1rem;
  justify-content: center;
  padding: 0.5%;

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  div:hover {
    background: #242425;
  }

  @media (max-width: 1115px) {
    padding: 1%;
  }
  @media (max-width: 995px) {
    padding-top: 2%;
  }
`

export const CodeLineNumber = styled.span`
  color: white;
`

export const Declaration = styled.span`
  color: rgb(51, 126, 177);
  font-style: italic;
  font-weight: 400;
`

export const Names = styled.span`
  color: rgb(236, 224, 52);
  font-weight: 800;
`

export const Signs = styled.span`
  color: rgb(207, 204, 204);
`

export const Space = styled.span`
  margin-left: 0.7%;
`

export const Comment = styled.span`
  color: grey;
`

export const Emphasis = styled.span`
  color: rgb(196, 33, 33);
  font-weight: 500;
`

export const VarName = styled.span`
  color: rgb(118, 250, 118);
`

export const VarValues = styled.span`
  color: rgb(41, 160, 41);
  font-weight: 600;
`

export const VarValueNumber = styled.span`
  color: orange;
`

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
`

export const HeaderAboutSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const AboutMeButton = styled.button`
  width: 20%;
  height: 50px;
  border-radius: 25px;

  margin-right: 2%;

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
`
export const AboutMeParagraph = styled.p`
  margin: 1%;
  font-size: 1rem;

  padding-right: 5%;

  color: #ffffff;
`
