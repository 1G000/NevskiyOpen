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
        <Routes>
          <div className="wrapper">
            <div className="header d-flex justify-center">
              <h1>Ростер игроков</h1>
            </div>
            <Route
              path="/"
              element={
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
          </div>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
