import { React, useState } from "react";

const Nav = ({ language, setPage, setCount }) => {
    const [active, setActive] = useState("home");

    const changePage = (page) => {
        setCount(0);
        setPage(page);
        setActive(page);
        window.scrollTo({ top: page === 'home' ? 0 : 128, behavior: 'smooth' })
    };

    return (
        <nav id="side">
            <ul>
                <li id='home' 
                    onClick={() => changePage('home')}  
                    className={active === "home" ? "active" : ""}>
                    {language === 'FR' ? 'ACCUEIL' 
                    : language === 'EN' ? 'HOME' 
                    : 'INIZIO'}
                </li>

                <li id='projects' 
                    onClick={() => changePage('projects')}  
                    className={active === "projects" ? "active" : ""}>
                    {language === 'FR' ? 'PROJETS' 
                    : language === 'EN' ? 'PROJECTS' 
                    : 'PROGETTI'}
                </li>

                <li id='cv' 
                    onClick={() => changePage('cv')}  
                    className={active === "cv" ? "active" : ""}> 
                    {language === 'FR' ? 'EXPÉRIENCES' 
                    : language === 'EN' ? 'EXPERIENCES' 
                    : 'ESPERIENZE'}
                </li>     

                <li id='skills' 
                    onClick={() => changePage('skills')}  
                    className={active === "skills" ? "active" : ""}>
                    {language === 'FR' ? 'COMPÉTENCES' 
                    : language === 'EN' ? 'SKILLS' 
                    : 'COMPETENZE'}
                </li>       
            </ul>
        </nav>
    );
}

export default Nav
