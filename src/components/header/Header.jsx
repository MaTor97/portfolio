import { act, React, useState } from "react";
import './Header.css';
import Nav from './nav/Nav'

function Header({language, setLanguage, setPage, setCount}) {
    const [activeLanguage, setActiveLanguage] = useState("FR");

    const changeLanguage = (language) => {
        setLanguage(language)
        setActiveLanguage(language)
    }

    return (
        <header>
            <Nav language={language} setPage={setPage} setCount={setCount}/>
            <nav id="headernav">
                <ul>
                    <li 
                        id='FR' 
                        onClick={() => changeLanguage('FR')}
                        className={activeLanguage === "FR" ? "activeLanguage" : ""}
                        >FR
                    </li>
                    <li 
                        id='EN' 
                        onClick={() => changeLanguage('EN')}
                        className={activeLanguage === "EN" ? "activeLanguage" : ""}
                        >EN
                    </li>
                    <li 
                        id='IT' 
                        onClick={() => changeLanguage('IT')}
                        className={activeLanguage === "IT" ? "activeLanguage" : ""}
                        >IT
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;