import React, { useState, useEffect } from "react";
import './Skills.css';

const Skills = ({ skillset, language }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        setSelectedItem(null);
    }, [language]);

    return (
        <div className="skillset">
            <div className={`menu ${isActive ? 'active' : ''}`}>
                <div className="toggleContainer">
                    <div className="toggle" onClick={toggleMenu}>
                        {skillset.icon || "Toggle"}
                    </div>
                </div>
                <ul>
                    {skillset.items.map((item, index) => (
                        <li key={index} style={{ '--i': index }} onClick={() => handleItemClick(item)}>
                            <a href="#">
                                <img src={item.image} alt={item.name} title={item.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text">
                { language === 'FR' ? 
                    selectedItem ? 
                        <>
                            <h3>{selectedItem.name}</h3>
                            <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
                        </>
                    :                
                        <>
                            <h3>Compétences</h3>
                            <ul>
                                {skillset.items.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                ))}
                            </ul>
                            <p id="feet">Cliquez sur l'icône pour sélectionner une compétence</p>
                        </>
                 : language === 'EN' ? 
                    selectedItem ? 
                        <>
                            <h3>{selectedItem.name}</h3>
                            <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
                        </>
                    :
                        <>
                            <h3>Skills</h3>
                            <ul>
                                {skillset.items.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                ))}
                            </ul>
                            <p id="feet">Click on the icon to select a skill</p>
                        </>
                 : language === 'IT' ? 
                    selectedItem ? 
                        <>
                            <h3>{selectedItem.name}</h3>
                            <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
                        </>
                    :
                        <>
                            <h3>Competenze</h3>
                            <ul>
                                {skillset.items.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                ))}
                            </ul>
                            <p id="feet">Fai clic sull'icona per selezionare una competenza</p>
                        </>
                : null}
            </div>
        </div>
    );
};

export default Skills;
