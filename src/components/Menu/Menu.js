import { useState } from "react"
import { NavLink } from "react-router-dom"
import navBarStyles from "../Menu/Menu.module.scss"

const Menu = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav className={navBarStyles.NavBar}>
      <div className={navBarStyles.leftSide}>
        <div className={navBarStyles.links} id={showLinks ? "hidden" : ""}>
          <NavLink to="/" end>
            Главная
          </NavLink>
          <NavLink to="/roster">Ростер</NavLink>
          <NavLink to="/rating">Рейтинг</NavLink>
          <NavLink to="/results">Результаты</NavLink>
          <NavLink to="/results">Турниры</NavLink>
          <NavLink to="/results">Галерея</NavLink>
          <NavLink to="/results">О нас</NavLink>
        </div>
        <button>Open</button>
      </div>
      <div className={navBarStyles.rightSide}>
        <h2>Невская лига</h2>
      </div>
    </nav>
  )
}

export default Menu
