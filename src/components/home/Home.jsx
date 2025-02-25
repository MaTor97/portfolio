import React from "react";
import './Home.css';

const Home = ({language, setpage}) => {
    return (
        <div className="home">
            {language === 'FR' 
                ? <p>Matteo Tortora est un développeur web qui cherche à se spécialiser en React tout en construisant son arsenal d'outils pour devenir full-stack. À l'écoute des nouvelles opportunités et toujours partant, c'est un avenir de découvertes et d'évolutions qui l'attend. Vous pouvez retrouver son parcours professionnel <span onClick={() => setpage('cv')}>ici</span>.</p>                 
            : language === 'EN' 
                ? <p>Matteo Tortora is a web developer aiming to specialize in React while expanding his toolkit to become full-stack. Open to new opportunities and always ready, a future of discoveries and growth awaits him. You can find his professional journey <span onClick={() => setpage('cv')}>here</span>.</p> 
            : language === 'IT' 
                ? <p>Matteo Tortora è uno sviluppatore web che mira a specializzarsi in React mentre espande il suo arsenale di strumenti per diventare full-stack. Aperto a nuove opportunità e sempre pronto, un futuro di scoperte e crescita lo attende. Puoi trovare il suo percorso professionale <span onClick={() => setpage('cv')}>qui</span>.</p>
            : null
            }
        </div>
    );
}

export default Home;