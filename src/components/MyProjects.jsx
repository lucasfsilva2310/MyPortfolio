import {
  ModalApp,
  ProjectsContainer,
  ProjectsDivSection,
} from "../styles/ProjectsDivSection";

import { Card, Image } from "grommet";
import { useState } from "react";
import { ModalDiv } from "../styles/ContactDivSection";
import ModalProject from "./ModalProject";
import { PROJECTS } from "../constants";

const MyProjects = () => {
  const [appInfo, setAppInfo] = useState({});
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [modalWasClicked, setModalWasClicked] = useState(false);

  return (
    <>
      {isAppModalOpen && (
        <ModalDiv
          onClick={() => {
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
        <p id="projects">{`<!..Projects..>`}</p>
        <ProjectsContainer>
          {PROJECTS.map((project) => {
            return (
              <Card
                animation={modalWasClicked ? "" : project.animation}
                align="center"
                height="300px"
                width="430px"
                margin={{ vertical: "xlarge", horizontal: "medium" }}
                focusIndicator={true}
                background={{ dark: "true" }}
                onClick={() => {
                  setAppInfo({
                    title: project.title,
                    description: project.description,
                    image: project.image,
                    technologies: project.technologies,
                    url: project.url,
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

