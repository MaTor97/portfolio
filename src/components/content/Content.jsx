import React from "react";
import './Content.css';
import ProjectCard from "../projects/projetcCard/ProjectCard";
import projectsData from "../../../public/data/projects.json";
import experienceData from "../../../public/data/experiences.json"
import Home from "../home/Home";
import Contact from "../contact/contact";
import Experiences from "../cv/Cv";

const Content = ({language, page, setpage, count}) => {
    
    return (
        <main>
            {page === 'home' 
                ? <Home language={language} setpage={setpage}/>
            : page === 'projects' 
                ? <ProjectCard 
                    key={count} 
                    project={projectsData.projects[count]} 
                    language={language} 
                    />
            : page === 'cv' 
                ? <Experiences
                    key={count} 
                    experience={
                        language === 'FR'
                            ? experienceData.fr[count]
                        : language === 'EN'
                            ? experienceData.en[count]
                        : language === 'IT'
                            ? experienceData.it[count]
                        :null
                } />
            : page === 'contact'
                ? <Contact language={language} />
            : null} 
        </main>
    );
}

export default Content;