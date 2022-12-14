import { useState } from "react"
import { NavLink } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import navBarStyles from "../Menu/Menu.module.scss"

const Menu = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav className={navBarStyles.NavBar}>
      <div className={navBarStyles.leftSide}>
        <div
          className={navBarStyles.links}
          id={showLinks ? navBarStyles.hidden : ""}
        >
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
        <button onClick={() => setShowLinks(!showLinks)}>
          <MenuIcon />
        </button>
      </div>
      <div className={navBarStyles.rightSide}>
        <h2>Невская сборная</h2>
      </div>
    </nav>
  )
}

export default Menu
