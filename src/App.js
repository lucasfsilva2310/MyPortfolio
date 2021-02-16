import "./reset.css";
import video from "./Videos/Coding Developer.mp4";
import { MainDivSection } from "./styles/MainDivSection";
import { ProjectsDivSection } from "./styles/ProjectsDivSection";
import { AboutDivSection } from "./styles/AboutDivSection";

function App() {
  return (
    <>
      <video src={video} autoPlay muted loop id="myVideo" />
      <MainDivSection>
        <h1>{`<!..Início..>`}</h1>
        <p>Olá.</p>
        <p>Meu nome é Lucas Ferreira,</p>
        <p>e eu desenvolvo websites</p>
        <span>Vem dar uma olhada!</span>
      </MainDivSection>
      <ProjectsDivSection></ProjectsDivSection>;
      <AboutDivSection>
        <p>{`{* Sobre *}`}</p>
      </AboutDivSection>
    </>
  );
}

export default App;
