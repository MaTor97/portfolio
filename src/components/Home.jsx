import React from "react";
import home_image from '../../public/assets/home_image.jpg';
import Contact from "./Contact";
import { GithubSVG, LinkedinSVG, CodecademySVG } from '../../public/data/svg';

const Home = ({language}) => {
    return (
        <div className="home">
            {language === 'FR' 
                ? <div className="text">
                    <div className="profile">
                        <img src={home_image} alt="Matteo Tortora" className="home__img" />
                        <div className="profileText">
                            <h1>Matteo Tortora</h1>
                            <p>Développeur Web Junior</p>
                        </div>
                    </div>
                    <a className="circle" href="https://github.com/MaTor97" target="_blank" rel="noreferrer">
                        <GithubSVG />
                    </a>
                    <a className="circle" href="https://www.linkedin.com/in/matteo-tortora/" target="_blank" rel="noreferrer">
                        <LinkedinSVG />
                    </a>
                    <a className="circle" href="https://www.codecademy.com/profiles/arc9207090463" target="_blank" rel="noreferrer">
                        <CodecademySVG />
                    </a>
                    <Contact language={language} />
                </div>                
            : language === 'EN' 
                ? <div className="text">
                    <div className="profile">
                        <img src={home_image} alt="Matteo Tortora" className="home__img" />
                        <div className="profileText">
                            <h1>Matteo Tortora</h1> 
                            <p>Junior Web Developer</p>
                        </div>
                    </div>
                    <a className="circle" href="https://github.com/MaTor97" target="_blank" rel="noreferrer">
                        <GithubSVG />
                    </a>
                    <a className="circle" href="https://www.linkedin.com/in/matteo-tortora/" target="_blank" rel="noreferrer">
                        <LinkedinSVG />
                    </a>
                    <a className="circle" href="https://www.codecademy.com/profiles/arc9207090463" target="_blank" rel="noreferrer">
                        <CodecademySVG />
                    </a>
                    <Contact language={language} />
                </div>  
            : language === 'IT' 
                ? <div className="text">
                    <div className="profile">
                        <img src={home_image} alt="Matteo Tortora" className="home__img" />
                        <div className="profileText">
                            <h1>Matteo Tortora</h1>
                            <p>Junior Web Developer</p>
                        </div>
                    </div>
                    <a className="circle" href="https://github.com/MaTor97" target="_blank" rel="noreferrer">
                        <GithubSVG />
                    </a>
                    <a className="circle" href="https://www.linkedin.com/in/matteo-tortora/" target="_blank" rel="noreferrer">
                        <LinkedinSVG />
                    </a>
                    <a className="circle" href="https://www.codecademy.com/profiles/arc9207090463" target="_blank" rel="noreferrer">
                        <CodecademySVG />
                    </a>
                    <Contact language={language} />
                </div>  
            : null
            }
        </div>
    );
}

export default Home;