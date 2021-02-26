import { MainDivSection, CheckIt, TextBox } from "../styles/MainDivSection";
import {
  TransitionWordsDiv,
  TransitionWords,
} from "../styles/TransitionWordsDiv";

const HeadContent = () => {
  return (
    <MainDivSection>
      <h1 id="start">{`<!..Início..>`}</h1>
      <TextBox>
        <p>Olá.</p>
        <p>Meu nome é Lucas Ferreira,</p>
        <TransitionWordsDiv>
          <p>e eu desenvolvo</p>
          <TransitionWords>
            <strong>websites</strong>
            {/*Animações prontas */
            /* <span className="words w1">websites</span>
            <span className="words w2">sugar</span>
            <span className="words w3">spice</span>
            <span className="words w4">colors</span> */}
          </TransitionWords>
        </TransitionWordsDiv>
        <CheckIt>Vem dar uma olhada!</CheckIt>
      </TextBox>
    </MainDivSection>
  );
};

export default HeadContent;
