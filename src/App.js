import "./reset.css";
import video from "./Videos/Coding Developer.mp4";
import { MainDivSection } from "./styles/MainDivSection";
import { ProjectsDivSection } from "./styles/ProjectsDivSection";
import { AboutDivSection } from "./styles/AboutDivSection";
import { RootDiv } from "./styles/RootDiv";
import {
  ContactDivSection,
  SocialMediasDiv,
  ButtonDiv,
} from "./styles/ContactDivSection";

function App() {
  return (
    <>
      <video src={video} autoPlay muted loop id="myVideo" />

      <MainDivSection>
        <h1>{`<!..Início..>`}</h1>
        <div>
          <p>Olá.</p>
          <p>Meu nome é Lucas Ferreira,</p>
          <p>e eu desenvolvo websites</p>
          <span>Vem dar uma olhada!</span>
        </div>
      </MainDivSection>
      <RootDiv>
        <ProjectsDivSection></ProjectsDivSection>;
        <AboutDivSection>
          <p>{`{/* Sobre */}`}</p>
        </AboutDivSection>
        <ContactDivSection>
          <SocialMediasDiv>
            <p>{`// Contato`}</p>
          </SocialMediasDiv>
          <ButtonDiv>{/*botao*/}</ButtonDiv>
        </ContactDivSection>
      </RootDiv>
    </>
  );
}

export default App;
