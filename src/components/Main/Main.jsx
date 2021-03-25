import * as React from "react"

import * as cx from "classnames"

import "./Main.css"

import { FaLinkedin, FaGithub, FaMailBulk, FaArrowRight } from "react-icons/fa"
import portrait from "src/images/pic.png"

const Main = ({selected, setSelect}) => {
  const handleSelcted = (display) => setSelect(display)
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 780

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      window.removeEventListener("resize",handleResizeWindow)
    }
  }, [])

  const isDesktop = width > breakpoint

  const navAbout = cx({
    "selected": selected === "about" && isDesktop,
    "nav-link": true && isDesktop,
    "title": !isDesktop
  })

  const navPortfolio = cx({
    "selected": selected === "portfolio",
    "nav-link": true
  })

  const navResume = cx({
    "nav-link": true,
    "title": !isDesktop,
    "resume-link": true,
  })

  return (
    <div className="banner-container">
      <div className="inner-container">
        <img alt="personal portrait" src={portrait} className="portrait"/>
        <div style={{lineHeight: `3rem`, textAlign: "center"}}>
          <div className="name">Jake Shin</div>
          <p className="title">Frontend Engineer</p>
        </div>
        <div className="link-container">
          <div onClick={() => handleSelcted("about")} className={navAbout}>About Me</div>
          {isDesktop ? 
            <div onClick={() => handleSelcted("portfolio")} className={navPortfolio}>Work Experience</div> :
            <div>Hi! My name is Jake. I'm currently a frontend engineer for Dokkaebier!</div>
          }
          <a href="https://drive.google.com/file/d/1OR5Z_i8fWwYjVy130diyPe1Y4lr_xCTU/view?usp=sharing" 
            className={navResume}>
              My Resume{isDesktop ? null : <FaArrowRight style={{fontSize: `1rem`, marginLeft: `0.5rem`}} />}
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
