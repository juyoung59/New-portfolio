import React, { useState } from 'react';
import "./Skills.css";

export const SkillAni = ({ src, alt, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <img className="skill-icon" src={src} alt={alt}/>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '0.1vw',
            textAlign: 'center',
            fontSize: "1vw"
          }}
        >
          {text}
        </div>
      )}
      </div>
  );
};