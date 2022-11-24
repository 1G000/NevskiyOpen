import React from "react"
import "./App.css"
// import Cards from "./components/Cards"

const players = [
  {
    imageUrl: "./img/1.jpg",
    name: "Victor",
    secondName: "Razmarin",
    age: 30,
    status: "active",
  },
  {
    imageUrl: "./img/2.jpg",
    name: "Igor",
    secondName: "GRB",
    age: 32,
    status: "legend",
  },
  {
    imageUrl: "./img/3.jpg",
    name: "Ivan",
    secondName: "Ivanov",
    age: 32,
    status: "bot",
  },
]

function App() {
  return players.map((player) => (
    <div>
      <img src={player.imageUrl} width={150} height={170} alt="blazergreen" />
      <h5>{`Имя: ${player.name}`}</h5>
      <h5>{`Фамилия: ${player.secondName}`}</h5>
      <div>
        <div className="mb-40 d-flex flex-column">
          <span>{player.age}</span>
          <b>{player.status}</b>
        </div>
      </div>
    </div>
  ))
}

export default App
