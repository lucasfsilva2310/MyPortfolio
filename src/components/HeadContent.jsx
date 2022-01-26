import { MainDivSection, CheckIt, TextBox } from "../styles/MainDivSection";
import {
  TransitionWordsDiv,
  TransitionWords,
} from "../styles/TransitionWordsDiv";

const HeadContent = () => {
  return (
    <MainDivSection>
      <h1 id="start">{`<!..Start..>`}</h1>
      <TextBox>
        <p>Hi.</p>
        <p>My name is Lucas Ferreira</p>
        <TransitionWordsDiv>
          <p>and I develop</p>
          <TransitionWords>
            <strong>websites</strong>
          </TransitionWords>
        </TransitionWordsDiv>
        <CheckIt>Come have a look!</CheckIt>
      </TextBox>
    </MainDivSection>
  );
};

export default HeadContent;
