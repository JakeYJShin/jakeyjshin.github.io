import * as React from "react"

import "./Portfolio.css"

import Card from "src/components/Card/Card"

import dkb from "src/images/dkb.png"
import meiday from "src/images/meiday.png"

const Portfolio = (props) => {
  const cardInfo = {
    dkb: [
      "Technologies used: Shopify Liquid, HTML/CSS, jQuery",
      "Increased conversation rate by 10% through collaboration with a designer to optimize the UX",
      "Improved load speeds by 25% by identifying inefficiencies and implementing various optimizations",
      "Eliminated 50% of monthly recurring costs by developing third-party plugins in-house",
      "www.enjoydkb.com"
    ],
    meiday: [
      "Technologies used: Javascript, HTML/CSS, Node, Python",
      "Developed responsive questionnaire web application for more efficient patient care in emergency rooms",
      "Led project to develop visualization tools for doctors to simulate hospital queuing theory",
      "Onboarded and mentored incoming co-ops in engineering best practices and processes"
    ]
  }

  return (
    <div className="portfolio-container">
      <Card cardInfo={cardInfo.dkb} cardTitle={"Dokkaebier"} cardImg={dkb}/>
      <Card cardInfo={cardInfo.meiday} cardTitle={"Meiday Health"} cardImg={meiday}/>
    </div>
  )
}

export default Portfolio
