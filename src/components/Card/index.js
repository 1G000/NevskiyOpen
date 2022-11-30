import React from "react"
import cardStyles from "./Card.module.scss"

function Card(props) {
  return (
    <div className={cardStyles.card}>
      <img src={props.imageUrl} width={150} height={170} alt="blazergreen" />
      <span>{props.name}</span>
      <span>{props.secondName}</span>
      <span> {props.age}</span>
      <span>{props.status}</span>
    </div>
  )
}

export default Card

// return (
//   <div className="card d-flex flex-column align-center">
//     <img src={player.imageUrl} width={150} height={170} alt="blazergreen" />
//     <span>{`Имя: ${player.name}`}</span>
//     <span>{`Фамилия: ${player.secondName}`}</span>
//     <span> {`Возраст: ${player.age} лет`}</span>
//     <span>{`Статус: ${player.status}`}</span>
//   </div>
// )
