import {
  AboutDivSection,
  CodeContainer,
  CodeRow,
  Declaration,
  Names,
  Signs,
} from "../styles/AboutDivSection";

const AboutMe = () => {
  return (
    <AboutDivSection>
      <p id="aboutMe">{`<!..Sobre..>`}</p>
      <CodeContainer>
        <CodeRow>
          <div>
            <Declaration>class </Declaration> <Names>Lucas</Names>{" "}
            <Signs>{`{`}</Signs>
          </div>
        </CodeRow>
      </CodeContainer>
    </AboutDivSection>
  );
};

export default AboutMe;
