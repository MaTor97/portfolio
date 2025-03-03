import React from "react";
import './ProjectCard.css';
import {GithubSVG, VisitSVG} from '../../../../public/data/svg';

const ProjectCard = ({ project, language }) => {
    return (
        <div className="card">
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
                
            <div className="project-card"> 
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
                <p id='description'>
                    
                    {project.description[language]}
                </p>
                <div className="tech">{project.technologies.join(', ')} { }</div>
            </div>  
            
        </div>
    );
}

export default ProjectCard;