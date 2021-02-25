import {
  ContactDivSection,
  SocialMediasDiv,
  ContactDiv,
  ButtonDiv,
} from "../styles/ContactDivSection";

const MyContactsInfo = ({ func }) => {
  return (
    <ContactDivSection>
      <SocialMediasDiv>
        <p>{`<!..Contato..>`}</p>
        <a href="https://www.linkedin.com/in/lucasfsilva2310/" target="_blank">
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
        <button onClick={() => func(true)}>Fale Comigo</button>
      </ButtonDiv>
    </ContactDivSection>
  );
};

export default MyContactsInfo;
