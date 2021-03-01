import {
  AppDescription,
  AppInfoContainer,
  AppModalButton,
  AppTechnology,
  AppTechnologyContainer,
  AppTitle,
  ImageApp,
} from "../styles/ProjectsDivSection";

export const ModalProject = ({ appInfo }) => {
  return (
    <>
      <ImageApp src={appInfo.image} alt={appInfo.title} />
      <AppInfoContainer>
        <AppTechnologyContainer>
          {appInfo.technologies.map((tech) => (
            <AppTechnology>{tech}</AppTechnology>
          ))}
        </AppTechnologyContainer>
        <AppTitle>{appInfo.title}</AppTitle>
        <AppDescription>{appInfo.description}</AppDescription>

        <AppModalButton
          type="button"
          onClick={() => window.open(appInfo.url, "_blank")}
        >
          Dar uma olhada!
        </AppModalButton>
      </AppInfoContainer>
    </>
  );
};

export default ModalProject;
