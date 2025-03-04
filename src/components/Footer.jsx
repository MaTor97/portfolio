import React from "react";
import '../styles/Footer.scss';
import { GithubSVG, LinkedinSVG, CodecademySVG } from '../../public/data/svg';

function Footer() {
    return (
        <footer>
            <a className="circle" href="https://github.com/MaTor97" target="_blank" rel="noreferrer">
                <GithubSVG />
            </a>
            <a className="circle" href="https://www.linkedin.com/in/matteo-tortora/" target="_blank" rel="noreferrer">
                <LinkedinSVG />
            </a>
            <a className="circle" href="https://www.codecademy.com/profiles/arc9207090463" target="_blank" rel="noreferrer">
                <CodecademySVG />
            </a>
        </footer>
    );
}

export default Footer;