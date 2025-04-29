import React, { useState, useEffect } from "react";

const Skills = ({ skillset, language }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleMenu = () => setIsActive(!isActive);
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

    const renderContent = () => {
        const { title, instruction } = languageLabels[language] || languageLabels.FR;

        if (selectedItem) {
            return (
                <>
                    <h3>{selectedItem.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: selectedItem.description }} />
                </>
            );
        }

        return (
            <>
                <h3>{title}</h3>
                <ul>
                    {skillset.items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
                <p id="feet">{instruction}</p>
            </>
        );
    };

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
                {renderContent()}
            </div>
        </div>
    );
};

export default Skills;
