import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// icons for gmail / linkedin / github
function SocialIconDiv({ size }) {
  return (
    <div className="flex justify-evenly w-2xl mt-10">
      <Icon link="https://github.com/aungkham-naung" target="_blank">
        <FontAwesomeIcon icon={faGithub} className={size} />
      </Icon>

      <Icon link="mailto:aung.k.naung@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className={size} />
      </Icon>

      <Icon link="https://www.linkedin.com/in/aung-kham-naung/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className={size} />
      </Icon>
    </div>
  );
}

export default SocialIconDiv;
