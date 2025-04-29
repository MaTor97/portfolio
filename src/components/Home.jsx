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
                            <p>"Développeur junior, il forge son expertise outil par outil pour devenir full-stack."</p>
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
                            <p>"Junior developer, forging his expertise tool by tool on the path to becoming full-stack."</p>
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
                            <p>"Sviluppatore junior, sta forgiando la sua competenza strumento dopo strumento per diventare full-stack."</p>
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