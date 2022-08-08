import {
  ContactComponentDesktop,
  ContactComponentMobile,
  ContactDesktopSideText,
  IconsDiv,
} from "./contact.styles";
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
    <>
      <ContactComponentMobile>
        <h3>Contact me</h3>
        <p>
          The best way to reach me is by email on <br />
          <a href="mailto: rafael-brittes@hotmail.com">
            Rafael-Brittes@hotmail.com
          </a>{" "}
          <br /> or in the socials below.
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
      </ContactComponentMobile>

      <ContactDesktopSideText>
        <h3>Contact me</h3>
        <p>
          If you have a question or want to talk, don't hesitate to
          contact me.
        </p>
        <p>
          Feel free to use the form aside to contact me or mail me in <br />{" "}
          <a href="mailto: rafael-brittes@hotmail.com">
            Rafael-Brittes@hotmail.com
          </a>
          .
          <br /> You can reach me also in the socials below.
        </p>

        <IconsDiv>
          {icons.map((icon) => (
            <a href={icon.href} key={icon.id}>
              <FontAwesomeIcon icon={icon.name} />
            </a>
          ))}
        </IconsDiv>
      </ContactDesktopSideText>

      <ContactComponentDesktop
        action="https://formsubmit.co/rafael-brittes@hotmail.com"
        method="POST"
      >
        <h3>Send me a message</h3>
        <input placeholder="Name" type="text" name="name" required />
        <input placeholder="Email Adress" type="email" required />
        <input placeholder="Subject" type="text" required />
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          value={"https://rafaelbrittes.github.io/"}
        ></input>
        <textarea
          className="message"
          name="message"
          cols="30"
          rows="10"
          required
          placeholder="Your message"
        ></textarea>
        <button type="submit">Send message</button>
      </ContactComponentDesktop>
    </>
  );
}

export default Contact;
