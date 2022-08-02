import { ContactComponent, IconsDiv } from "./contact.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const icons = [
    {
      id: 1,
      name: faLinkedin,
      href: "https://www.linkedin.com/in/rafaelbrittes/",
    },
    { id: 2, name: faGithub, href: "https://github.com/RafaelBrittes" },
    {
      id: 3,
      name: faFacebook,
      href: "https://www.facebook.com/rafael.brittes.3/",
    },
  ];

  return (
    <ContactComponent>
      <h3>Contact me</h3>
      <p>
        The best way to reach me is by email on{" "}
        <a href="mailto: rafael-brittes@hotmail.com">
          Rafael-Brittes@hotmail.com
        </a>{" "}
        or in the socials below.
      </p>
      <p>
        However, if you have a question or want to talk, don't hesitate to
        contact me.
      </p>
      <IconsDiv>
        {icons.map((icon) => (
          <a href={icon.href} key={icon.id}>
            <FontAwesomeIcon icon={icon.name} />
          </a>
        ))}
      </IconsDiv>
    </ContactComponent>
  );
}

export default Contact;
