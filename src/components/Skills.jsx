import React, { useState, useEffect } from "react";

const Skills = ({ skillset, language }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    console.log(skillset.icon);

    const handleItemClick = (item) => setSelectedItem(item);

    useEffect(() => {
        setSelectedItem(null); // Reset on language change
    }, [language]);

    const languageLabels = {
        FR: {
            title: "Compétences",
            instruction: "Cliquez sur l'icône pour sélectionner une compétence"
        },
        EN: {
            title: "Skills",
            instruction: "Click on the icon to select a skill"
        },
        IT: {
            title: "Competenze",
            instruction: "Fai clic sull'icona per selezionare una competenza"
        }
    };

    return (
        <div className="skillset">
            <ul>
                {skillset.items.map((item, index) => (
                    <li key={index} style={{ '--i': index }} onClick={() => handleItemClick(item)}>
                        <a href="#">
                            <div className="head">
                                <img src={item.image} alt={item.name} title={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                            <p>{item.description}</p>
                        </a>
                    </li>                 
                ))}
            </ul>
            <div className="icon">{skillset.icon}</div>   
        </div>
    );
};

export default Skills;
