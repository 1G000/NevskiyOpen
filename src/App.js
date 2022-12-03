import React from "react"
import "./App.scss"
import Card from "./components/Card"
import Rank from "./components/Rank"
import Results from "./components/Results/Results"
import players from "./components/Data/Data"

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
              birthDate={obj.birthDate}
              turnToProDate={obj.turnToProDate}
              powerHand={obj.powerHand}
              backhandStyle={obj.backhandStyle}
              rankingPosition={obj.rankingPosition}
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
