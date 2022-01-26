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
      "Simple app about Pokémon, for the purpose of practice getting data from an outside API",
    technologies: ["#React", "#Redux", "#Javascript", "#HTML", "#CSS", "#API"],
    image: "https://i.postimg.cc/x8W3D4NB/Home-Pokedex-1.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://my-own-pokedexv2.vercel.app/",
  },
  {
    title: "Dbookshelf",
    description:
      "App made for practice working with a google API, and because I wanted a way to search for, and save my favorite books :)",
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
      "A simple pomodoro App with a few gaming features for motivation and being focused while I´m studying/working",
    technologies: ["#React", "#ContextAPI", "#Javascript", "#HTML", "#CSS"],
    image: "https://i.postimg.cc/rwWMk03H/Home-Pomo-Genius.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://healthy-pomo-one.vercel.app/",
  },
  {
    title: "My Cuisine",
    description:
      "A recipes app. You can search for a recipe, watch a youtube video about it, and also sabe as favorite for later use! I personally love this one.",
    technologies: [
      "#React",
      "#ContextAPI",
      "#Javascript",
      "#HTML",
      "#CSS",
      "EdamansAPI",
      "YoutubeAPI",
    ],
    image: "https://i.postimg.cc/kg5J6dN6/Home-My-Cuisine.png",
    animation: { type: "jiggle", duration: 4000, size: "small" },
    url: "https://my-cuisine.vercel.app/",
  },
];
