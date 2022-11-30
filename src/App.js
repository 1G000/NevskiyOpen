import React from "react"
import "./App.scss"
import Card from "./components/Card"
import Rank from "./components/Rank/Rank"
import Results from "./components/Results/Results"

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
  return (
    <div>
      <div className="wrapper">
        <div className="header d-flex justify-center">
          <h1>Ростер игроков</h1>
        </div>
        <div className="cards d-flex justify-between flex-wrap">
          {players.map((obj) => (
            <Card
              name={obj.name}
              secondName={obj.secondName}
              age={obj.age}
              status={obj.status}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
        <Rank />
        <Results />
      </div>
    </div>
  )
}

export default App
