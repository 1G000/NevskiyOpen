import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" end>
          Главная
        </NavLink>
        <NavLink to="/roster">Ростер</NavLink>
        <NavLink to="/rating">Рейтинг</NavLink>
        <NavLink to="/results">Результаты</NavLink>
      </div>
    </nav>
  )
}

export default Menu
