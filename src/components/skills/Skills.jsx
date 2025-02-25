import React from "react";
import './Skills.css'

const Skills = ({skillset}) => {
    return (
        <div className="skillset">
            <div>
                {skillset.icon}
            </div>
            <ul>
            {skillset.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    );
}

export default Skills