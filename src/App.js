import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Rating from "./pages/Rating"
import Results from "./pages/Results"
import Home from "./pages/Home"
import Roster from "./pages/Roster"
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Menu />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <footer>
          <h4>На связи кароче пацаны</h4>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
