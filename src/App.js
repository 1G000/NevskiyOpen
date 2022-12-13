import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Rating from "./pages/Rating"
import Results from "./pages/Results"
import Home from "./pages/Home"
import Roster from "./pages/Roster"
import MainLayout from "./pages/MainLayout"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="roster" element={<Roster />} />
              <Route path="rating" element={<Rating />} />
              <Route path="results" element={<Results />} />
            </Route>
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
