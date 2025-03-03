import React from 'react';
import './Cv.css';

const Experiences = ({ experience }) => {
  return (
    <div className='exp'>
      <h3>{experience.start} {'->'} {experience.end}</h3>
      <div className="content">
        <div className="desc">
          <div className="imgContainer">
            <img src={experience.image} alt={experience.title} />
          </div>
          <p>{experience.description}</p>
        </div>
        <ul>
            {experience.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
      </div>
      <div className="foot">
        <em>{experience.location}</em>
      </div>  
    </div>
  );
};

export default Experiences;