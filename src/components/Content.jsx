import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../public/data/projects.json";
import experienceData from "../../public/data/experiences.json"
import skillsData from "../../public/data/skills.json"
import Home from "./Home";
import Skills from "./Skills"
import Contact from "./Contact";
import Experiences from "./Cv";

const Content = ({language, page, setpage, count}) => {
    
    return (
        <main>
            {page === 'home' 
                ? <Home language={language} setpage={setpage}/>
            : page === 'skills'
                ? <Skills
                    key={count} 
                    skillset={skillsData[language][count]}
                    language={language}
                    />
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