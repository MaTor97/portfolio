import React from "react";
import './ProjectCard.css';
import {GithubSVG, VisitSVG} from '../../../../public/data/svg';

const ProjectCard = ({ project, language }) => {
    return (
        <div className="card">
            <div className="project-card">
                <a 
                    className="circle" 
                    href={project.demo} 
                    target="_blank" 
                     rel="noopener noreferrer"
                    >
                    <img src={project.image} alt={project.title[language]} />
                </a>
                <div className="project-card-text">
                    <h3>{project.title[language]}</h3>
                    <div className="project-card__links">
                        <a className="circle" href={project.github} target="_blank" rel="noreferrer">
                            <GithubSVG />
                        </a>
                        <a className="circle" href={project.demo} target="_blank"  rel="noopener noreferrer">
                            <VisitSVG />
                        </a>
                    </div>
                    <p>{project.technologies.join(', ')}</p>
                </div>
            </div>
            <p>{project.description[language]}</p>
        </div>
    );
}

export default ProjectCard;