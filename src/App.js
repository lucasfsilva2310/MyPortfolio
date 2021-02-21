/* eslint-disable react/jsx-no-target-blank */
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
  ContactDiv,
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
            <a
              href="https://www.linkedin.com/in/lucasfsilva2310/"
              target="_blank"
            >
              <ContactDiv>
                <img
                  src="https://img.icons8.com/nolan/64/linkedin.png"
                  alt="Linkedin"
                />
                <span>in/lucasfsilva2310</span>
              </ContactDiv>
            </a>
            <a href="https://github.com/lucasfsilva2310" target="_blank">
              <ContactDiv>
                <img
                  src="https://img.icons8.com/nolan/64/github.png"
                  alt="GitHub"
                />
                <span>github.com/lucasfsilva2310</span>
              </ContactDiv>
            </a>
          </SocialMediasDiv>
          <ButtonDiv>
            <button>Fale Comigo</button>
          </ButtonDiv>
        </ContactDivSection>
      </RootDiv>
    </>
  );
}

export default App;
