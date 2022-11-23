import React from "react"
import cardStyles from "./Card.module.scss"

function Card() {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite}>
        <img src={"/img/heart-liked.svg"} alt="Unliked" />
      </div>
      <img
        src={"/img/PlayersPhoto/GorbatovskiyIgor.jpg"}
        width={150}
        height={170}
        alt="blazergreen"
      />
      <h5>Горбатовский Игорь</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Гений игры</span>
          <b>Красава</b>
        </div>
        <img
          className={cardStyles.plus}
          src={"/img/btn-plus.svg"}
          alt="plus"
        ></img>
      </div>
    </div>
  )
}

export default Card
