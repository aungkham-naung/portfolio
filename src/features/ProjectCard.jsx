import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkButton from "./LinkButton";

function ProjectCard({ title, description, imageUrl, github, live = null }) {
  return (
    <div className="bg-white/5 shadow-md rounded-lg overflow-hidden ">
      <img src={imageUrl} alt="" className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-indigo-500 bold">
          {title}
        </h3>
        <p className="text-stone-200 mb-4">{description}</p>
        <div className="flex space-x-4">
          {github && (
            <LinkButton link={github}>
              Demo{" "}
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </LinkButton>
          )}
          {live && <LinkButton link={live}>Live 🚀</LinkButton>}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
