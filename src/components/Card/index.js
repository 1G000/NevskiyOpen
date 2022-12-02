import React from "react"
import cardStyles from "./Card.module.scss"

function Card(props) {
  return (
    <div className={cardStyles.card}>
      <img src={props.imageUrl} width={170} height={170} alt="blazergreen" />
      <span>{`${props.name} ${props.secondName}`}</span>

      <span>{`Дата рождения: ${props.birthDate}`}</span>
      <span>{`Начало карьеры: ${props.turnToProDate}`}</span>
      <span>{`Рука: ${props.powerHand}`}</span>
      <span>{`Бэкхенд: ${props.backhandStyle}`}</span>
      <span>{`Позиция в рейтинге: ${props.rankingPosition}`}</span>
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
