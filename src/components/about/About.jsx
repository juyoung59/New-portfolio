import React from "react";
import "./About.css";
import { GoPersonFill } from "react-icons/go";
import { MdCake, MdHouse } from "react-icons/md";
import { IoMailSharp, IoSchool, IoLogoGithub } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import Profile from "../../img/profile.png";

function About() {
  return (
    <div className="About" id="about">
      <div className="about-card">
        <h1 className="about-title">ABOUT ME</h1>
        <div className="profile-about">
          <img className="Profile" src={Profile} alt="Profile"></img>
          <ul className="about-me">
            <li><GoPersonFill /><span className="licontents">이주영</span></li>
            <li><MdCake /><span className="licontents">2000. 05. 09</span></li>
            <li><MdHouse /><span className="licontents">인천광역시 부평구</span></li>
            <li><IoMailSharp /><span className="licontents">juyoung05@hanmail.net</span></li>
            <li><IoSchool /><span className="licontents">한경국립대학교 전기전자제어공학과</span></li>
            <li><FaSchool /><span className="licontents">KT AIVLE School 3기</span></li>
            <li style={{ marginTop: '2vw' }}><a className="goToGit" href="https://github.com/juyoung59" target="_blank" rel="noopener noreferrer"><IoLogoGithub /><span className="licontents">GitHub</span></a></li>
          </ul>
        </div>
      </div>
      <hr></hr>
    </div>
  )
};

export default About;