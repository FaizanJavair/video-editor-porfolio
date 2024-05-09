import React,{ useContext} from 'react';
import link from '../../assets/svg/projects/external-link.svg'
import github from '../../assets/svg/projects/github.svg'
import { ThemeContext } from '../../contexts/ThemeContext';
function ProjectCard({ project }) {
const { theme } = useContext(ThemeContext);
  return (
    <div
      className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <img
          className="w-full rounded-md"
          src={project.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex projects-center justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3  style={{color: theme.primary}}className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="space-x-2 flex">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <img
                  src={link}
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <img
                  src={github}
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p style={{color: theme.primary}} className="text-fun-gray text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <a href={``}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
