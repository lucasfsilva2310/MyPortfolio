import {
  ModalApp,
  ProjectsContainer,
  ProjectsDivSection,
} from "../styles/ProjectsDivSection";

import { Card, Image } from "grommet";
import { useState } from "react";
import { ModalDiv } from "../styles/ContactDivSection";
import ModalProject from "./ModalProject";

const MyProjects = () => {
  const [appInfo, setAppInfo] = useState({});
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [modalWasClicked, setModalWasClicked] = useState(false);

  return (
    <>
      {isAppModalOpen && (
        <ModalDiv
          onClick={() => {
            setIsFormOpen(true);
            setIsAppModalOpen(false);
            setModalWasClicked(false);
          }}
        ></ModalDiv>
      )}
      {isAppModalOpen && (
        <ModalApp>
          <ModalProject appInfo={appInfo} />
        </ModalApp>
      )}

      <ProjectsDivSection>
        <p id="projects">{`<!..Projetos..>`}</p>
        <ProjectsContainer>
          {Projects.map((project) => {
            return (
              <Card
                animation={modalWasClicked ? "" : project.animation}
                align="center"
                // border={{ style: "solid", size: "medium" }}
                height="300px"
                width="430px"
                margin={{ vertical: "xlarge", horizontal: "medium" }}
                focusIndicator={true}
                background={{ dark: "true" }}
                onClick={() => {
                  const projectInfo = project;
                  setAppInfo({
                    title: projectInfo.title,
                    description: projectInfo.description,
                    image: projectInfo.image,
                    technologies: projectInfo.technologies,
                    url: projectInfo.url,
                  });
                  setModalWasClicked(true);
                  setIsAppModalOpen(true);
                }}
              >
                <Image fit="cover" src={project.image} alt={project.title} />
                <span>{project.title}</span>
              </Card>
            );
          })}
        </ProjectsContainer>
      </ProjectsDivSection>
    </>
  );
};

export default MyProjects;

const Projects = [
  {
    title: "MyOwnPokédex",
    description:
      "Criado um aplicativo que obtém informações de uma API externa, e de acordo com a seleção do usuário, renderiza outra página com a descrição do card clicado. Foram usadas as tecnologias React, Redux para armazenar informações, e requisições de uma API.",
    technologies: ["#React", "#Redux", "#Javascript", "#HTML", "#CSS", "#API"],
    image: "https://i.postimg.cc/x8W3D4NB/Home-Pokedex-1.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://my-own-pokedexv2.vercel.app/",
  },
  {
    title: "Dbookshelf",
    description:
      "Criado um aplicativo onde se pode buscar por qualquer livro contido na API de livros da Google. É possível pesquisar, salvar seus livros favoritos em uma lista, e também removê-los. Foi usada uma técnica de armazenamento de informações local.",
    technologies: [
      "#React",
      "#Redux",
      "#Javascript",
      "#HTML",
      "#CSS",
      "#APIGoogle",
    ],
    image: "https://i.postimg.cc/SscyfX78/Home-DBook-Sheld.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://dbookshelf.vercel.app/",
  },
  {
    title: "HealthyPomo",
    description:
      "Um aplicativo criado com a técnica de pomodoro, para estudos, mas com um método de 'gamificação'. O usuário, ao completar ciclos de estudo, pode efetuar determinados desafios para subir de level.",
    technologies: ["#React", "#ContextAPI", "#Javascript", "#HTML", "#CSS"],
    image: "https://i.postimg.cc/rwWMk03H/Home-Pomo-Genius.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://healthy-pomo-one.vercel.app/",
  },
];
