import {
  ProjectsContainer,
  ProjectsDivSection,
} from "../styles/ProjectsDivSection";

import { Box } from "grommet";

const MyProjects = () => {
  return (
    <ProjectsDivSection>
      <p id="projects">{`<!..Projetos..>`}</p>
      <ProjectsContainer>
        {Projects.map((project) => {
          return (
            <Box
              animation={project.animation}
              align="center"
              border={{ style: "solid", size: "medium" }}
              height="small"
              margin={{ vertical: "xlarge", horizontal: "medium" }}
              focusIndicator={true}
              onClick={() => console.log("oi")}
            >
              <img src={project.image} alt={project.title} />
              <span>{project.title}</span>
            </Box>
          );
        })}
      </ProjectsContainer>
    </ProjectsDivSection>
  );
};

export default MyProjects;

const Projects = [
  {
    title: "MyOwnPokédex",
    description: "Descrição",
    technologies: "tecnologias",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHdOdw4iIpCNMLDNGxxnB4L47gGLWAA5nig&usqp=CAU",
    animation: { type: "pulse", duration: 4000 },
  },
  {
    title: "Dbookshelf",
    description: "Descrição",
    technologies: "tecnologias",
    image: "https://mdn.mozillademos.org/files/8531/web-site.jpg",
    animation: { type: "jiggle", duration: 4000 },
  },
  {
    title: "PomoGenius",
    description: "Descrição",
    technologies: "tecnologias",
    image:
      "https://media.gcflearnfree.org/content/5e9745ab65c51443f80a55e8_04_15_2020/exploring.png",
    animation: { type: "pulse", duration: 4000 },
  },
];
