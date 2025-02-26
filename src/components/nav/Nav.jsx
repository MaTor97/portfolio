import React from "react";
import './Nav.css';
import logo from '../../../public/assets/cleaned_cube.png'

const Nav = ({language, setPage, setCount}) => {
    const changePage = (page) => {
        setCount(0)
        setPage(page)
    };

    return (
        <nav id="side">
            <ul>
                <li id='home' onClick={() => setPage('home')}>
                    {language === 'FR' 
                    ? 'ACCUEIL' 
                    : language === 'EN' 
                    ? 'HOME' 
                    : 'INIZIO'}
                </li>
                <li id='skills' onClick={() => setPage('skills')}>
                    {language === 'FR'
                    ? 'COMPÉTENCES'
                    : language === 'EN'
                    ? 'SKILLS'
                    : 'COMPETENZE'}
                </li>
                <li id='projects' onClick={() => changePage('projects')}>
                    {language === 'FR' 
                    ? 'PROJETS' 
                    : language === 'EN' 
                    ? 'PROJECTS' 
                    : 'PROGETTI'}
                </li>
                <li id='cv' onClick={() => changePage('cv')}>
                    {language === 'FR' 
                    ? 'EXPÉRIENCES' 
                    : language === 'EN' 
                    ? 'EXPERIENCES' 
                    : 'ESPERIENZE'}
                </li>
                <li id='#' onClick={() => setPage('contact')}>
                    {language === 'FR' 
                        ? 'CONTACT' 
                        : language === 'EN' 
                        ? 'CONTACT' 
                        : 'CONTATTO'}
                </li>              
                <li className="photo">
                    <img src={logo} alt="" />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;