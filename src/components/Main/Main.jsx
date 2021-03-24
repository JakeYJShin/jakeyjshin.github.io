import * as React from "react"

import "./Main.css"

import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa"
import portrait from "src/images/pic.png"

const Main = ({setSelect}) => {
  const handleSelcted = (display) => setSelect(display)

  return (
    <div className="banner-container">
      <div className="inner-container">
        <img src={portrait} className="portrait"/>
        <div style={{lineHeight: `3rem`, textAlign: "center"}}>
          <div className="name">Jake Shin</div>
          <p className="title">Frontend Engineer</p>
        </div>
        <div className="link-container">
          <div onClick={() => handleSelcted("about")} className="nav-link">About Me</div>
          <div onClick={() => handleSelcted("portfolio")} className="nav-link">Portfolio</div>
          <a href="https://drive.google.com/file/d/1OR5Z_i8fWwYjVy130diyPe1Y4lr_xCTU/view?usp=sharing" 
            className="nav-link">
              My Resume
          </a>
        </div>
        <div className="logo-container">
          <a className="logo" href="mailto:jakeshin22@gmail.com"><FaMailBulk /></a>
          <a className="logo" href="https://www.linkedin.com/in/jakeyjshin/"><FaLinkedin /></a>
          <a className="logo" href="https://github.com/JakeYJShin"><FaGithub /></a>
        </div>
      </div>
    </div>
  )

}

export default Main;
