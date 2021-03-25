import * as React from "react"

import "./About.css"

import { FaArrowRight } from "react-icons/fa"

const About = (props) => {
  const {setSelect} = props

  return (
    <div className="about-container">
    <div>
      My name is Jake! I'm currently working as a Frontend Engineer at Dokkaebier. My interests include fishing, cooking, and playing Smash Bros with my friends.
    </div>
    <div className="portfolio" onClick={() => setSelect("portfolio")}>
      Click here to see my work experience <FaArrowRight style={{marginLeft: `1rem`}} />
    </div>
  </div>
  )

}

export default About
