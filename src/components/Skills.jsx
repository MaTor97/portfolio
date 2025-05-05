import React, { useState, useEffect } from "react";

const Skills = ({ skillset, language }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        // Si on clique à nouveau sur l'item sélectionné, on le referme
        setSelectedItem(selectedItem === item ? null : item);
    };

    useEffect(() => {
        setSelectedItem(null); // Réinitialise quand la langue change
    }, [language]);

    return (
        <div className="skillset">
            <ul>
                {skillset.items.map((item, index) => (
                    <li key={index} style={{ '--i': index }} onClick={() => handleItemClick(item)}>
                        <div className="head">
                            <img src={item.image} alt={item.name} title={item.name} />
                            <h4>{item.name}</h4>
                        </div>

                        <p className={`description ${selectedItem === item ? 'open' : ''}`}>
                            {item.description}
                        </p>
                        <div className="bottomLi"></div>
                    </li>

                ))}
            </ul>
            <div className="icon">{skillset.icon}</div>
        </div>
    );
};

export default Skills;
