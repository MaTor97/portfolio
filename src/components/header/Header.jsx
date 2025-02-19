import React from "react";
import './Header.css';
import { GithubSVG, LinkedinSVG, CodecademySVG } from '../../../public/data/svg';

function Header({setLanguage, setPage}) {
    return (
        <header>
            <h1>Matteo Tortora</h1>
            <a className="circle" href="https://github.com/MaTor97" target="_blank" rel="noreferrer">
                <GithubSVG />
            </a>
            <a className="circle" href="https://www.linkedin.com/in/matteo-tortora/" target="_blank" rel="noreferrer">
                <LinkedinSVG />
            </a>
            <a className="circle" href="https://www.codecademy.com/profiles/arc9207090463" target="_blank" rel="noreferrer">
                <CodecademySVG />
            </a>
            <nav>
                <ul>
                    <li id='FR' onClick={() => setLanguage('FR')}>FR</li>
                    <li id='EN' onClick={() => setLanguage('EN')}>EN</li>
                    <li id='IT' onClick={() => setLanguage('IT')}>IT</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;