import React from "react"
import Card from "../components/Card"
import players from "../components/Data/Data"

const Roster = () => {
  return (
    <div className="header">
      <h1>Ростер игроков</h1>
      <div className="cards">
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
    </div>
  )
}

export default Roster
