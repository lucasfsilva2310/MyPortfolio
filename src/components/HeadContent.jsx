import { MainDivSection, CheckIt, TextBox } from "../styles/MainDivSection";

const HeadContent = () => {
  return (
    <MainDivSection>
      <h1 id="start">{`<!..Start..>`}</h1>
      <TextBox>
        <p>Hello.</p>
        <p>My name is Lucas Ferreira Silva</p>
          <p>and I am a FullStack developer</p>
        <CheckIt>Come have a look at my projects!</CheckIt>
      </TextBox>
    </MainDivSection>
  );
};

export default HeadContent;
