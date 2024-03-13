import React from "react";
import "./Skills.css";
import { SkillAni } from "./SkillAni";

import HtmlIcon from "../../img/html.png";
import CssIcon from "../../img/css.png";
import JsIcon from "../../img/js.png";
import ReactIcon from "../../img/react.png";
import GitIcon from "../../img/git.png";
import BootstrapIcon from "../../img/bootstrap.png";
import MysqlIcon from "../../img/mysql.png";
import NodeIcon from "../../img/node.png";
import DjangoIcon from "../../img/django.png";

function Skills () {
  return(
    <div className="Skills" id="skills">
      <h1 className="title">Main Skills</h1>
      <div className="skill-icons">
        <div className="skill-wrap">
          <SkillAni src={HtmlIcon} alt="HtmlIcon" text="Familiar" />
          <p className='skill-title'>HTML</p>
        </div>
        <div className="skill-wrap">
          <SkillAni src={CssIcon} alt="CssIcon" text="Familiar" />
          <p className='skill-title'>CSS</p>
        </div>
        <div className="skill-wrap">
          <SkillAni src={JsIcon} alt="JsIcon" text="Familiar" />
          <p className='skill-title'>JavaScript</p>
        </div>
        <div className="skill-wrap">
          <SkillAni src={ReactIcon} alt="ReactIcon" text="Familiar" />          
          <p className='skill-title'>React</p>
        </div>
        <div className="skill-wrap-last">
          <SkillAni src={GitIcon} alt="GitIcon" text="Familiar" />    
          <p className='skill-title'>GitHub</p>
        </div>
      </div>

      <div className="skill-icons">
        <div className="skill-wrap">
          <SkillAni src={BootstrapIcon} alt="BootstrapIcon" text="Tried" />
          <p className='skill-title'>Bootstrap</p>
        </div>
        <div className="skill-wrap">
          <SkillAni src={MysqlIcon} alt="MysqlIcon" text="Tried" />
          <p className='skill-title'>MySQL</p>
        </div>
        <div className="skill-wrap">
          <SkillAni src={NodeIcon} alt="NodeIcon" text="Tried" />
          <p className='skill-title'>Node.js</p>
        </div>
        <div className="skill-wrap-last">
          <SkillAni src={DjangoIcon} alt="DjangoIcon" text="Tried" />
          <p className='skill-title'>Django</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;