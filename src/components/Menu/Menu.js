import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <div className="container">
        <Link to="/">Home</Link>
        <Link to="/roster">Ростер</Link>
        <Link to="/rating">Рейтинг</Link>
        <Link to="/results">Результаты</Link>
      </div>
    </nav>
  )
}

export default Menu
