import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Card from "./components/Card"
import Rank from "./components/Rank"
import Results from "./components/Results"
import players from "./components/Data/Data"

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
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
              }
            />
            <Route path="ranked" element={<Rank />} />
            <Route
              path="results"
              element={
                <div className="d-flex align-center flex-column">
                  <h3>Результаты матчей</h3>
                  <Results />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
