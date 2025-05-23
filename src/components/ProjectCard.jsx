import React from "react";
import {GithubSVG, VisitSVG} from '../../public/data/svg';

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
                    <picture>
                        <source srcSet={project.image} type="image/webp" />
                        <img src={project.image2} alt={project.title[language]} loading="lazy" />
                    </picture>
                </a>         
                <p id='description'> 
                    {project.description[language]}
                </p>
            </div>  
            <div className="tech">
                <ul>
                    {project.technologies.map(tech => {
                    return (
                        <li key={tech}>{tech}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="project-card-text">
                    <div className="project-card__links">
                        <a className="circle" href={project.github} target="_blank" rel="noreferrer">
                            <GithubSVG />
                        </a>
                        <a className="circle" href={project.demo} target="_blank"  rel="noopener noreferrer">
                            <VisitSVG />
                        </a>
                    </div>
                    
                </div>
        </div>
    );
}

export default ProjectCard;