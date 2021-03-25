import * as React from "react"

import "./Card.css"

const Card = (props) => {
  const { cardTitle, cardImg, cardInfo } = props
  return (
    <div className="outer-card-container">
      <div className="card-container">
        <div className="card-title">{cardTitle}</div>
        <div className="img-container">
          <img className="card-logo" src={cardImg} />
        </div>
      </div>
      <div className="card-info">
        <ul>
          {cardInfo.map(el => {
            return (
              <li>
                {el}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Card;
