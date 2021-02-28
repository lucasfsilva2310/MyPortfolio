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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["#React", "#Redux", "#Javascript", "#HTML", "#CSS"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHdOdw4iIpCNMLDNGxxnB4L47gGLWAA5nig&usqp=CAU",
    animation: { type: "pulse", duration: 4000, size: "small" },
    url:
      "https://stackoverflow.com/questions/34082002/html-button-opening-link-in-new-tab",
  },
  {
    title: "Dbookshelf",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["#React", "#Redux", "#Javascript", "#HTML", "#CSS"],
    image: "https://mdn.mozillademos.org/files/8531/web-site.jpg",
    animation: { type: "jiggle", duration: 4000 },
    url: "https://www.linkedin.com/mynetwork/",
  },
  {
    title: "PomoGenius",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: ["#React", "#Redux", "#Javascript", "#HTML", "#CSS"],
    image:
      "https://media.gcflearnfree.org/content/5e9745ab65c51443f80a55e8_04_15_2020/exploring.png",
    animation: { type: "pulse", duration: 4000 },
    url: "https://www.linkedin.com/mynetwork/",
  },
];
