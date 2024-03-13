import React, { useState } from 'react';
import './Projects.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { MdLaptopChromebook } from "react-icons/md";
import gitImg from '../../img/git.png';
import linkImg from '../../img/link.png'

const Project = ({ image, title, info, period, used, team, work, link, source }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card">
        <div className="content">
          <div className={`front ${isFlipped ? 'hidden' : ''}`}>
            <img className="project-img" src={image} alt="Project" />
          </div>
          <div className={`back ${isFlipped ? '' : 'hidden'}`}>
            <div className="back-content">
              <h3>{title}</h3>
              <p className="info">{info}</p>
              <p><RiTeamLine /> {team} <MdLaptopChromebook style={{ marginLeft: '1vw' }} /> {work} </p>
              <p className="period"><FaRegCalendarAlt /> {period}</p>
              <p><FaPencil /> {used}</p>              
              <a href={source} target="_blank" rel="noopener noreferrer">
                <img className="gitImg" src={gitImg} alt="gitImg"/>
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img className="linkImg" src={linkImg} alt="linkImg"/>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
