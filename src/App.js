import React from "react"
import "./App.css"
// import Cards from "./components/Cards"

const players = [
  {
    imageUrl: "./img/1.jpg",
    name: "Victor",
    secondName: "Razmarin",
    age: 30,
    status: "active",
  },
  {
    imageUrl: "./img/2.jpg",
    name: "Igor",
    secondName: "GRB",
    age: 32,
    status: "legend",
  },
  {
    imageUrl: "./img/3.jpg",
    name: "Ivan",
    secondName: "Ivanov",
    age: 32,
    status: "bot",
  },
  {
    imageUrl: "./img/1.jpg",
    name: "Victor",
    secondName: "Razmarin",
    age: 30,
    status: "active",
  },
  {
    imageUrl: "./img/2.jpg",
    name: "Igor",
    secondName: "GRB",
    age: 32,
    status: "legend",
  },
  {
    imageUrl: "./img/3.jpg",
    name: "Ivan",
    secondName: "Slabakov",
    age: 32,
    status: "bot",
  },
  {
    imageUrl: "./img/2.jpg",
    name: "Igor",
    secondName: "GRB",
    age: 32,
    status: "legend",
  },
  {
    imageUrl: "./img/3.jpg",
    name: "Ivan",
    secondName: "Ivanov",
    age: 32,
    status: "bot",
  },
]

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="header d-flex justify-center">
          <h1>Стэк игроков</h1>
        </div>
        <div className="cards d-flex justify-between flex-wrap">
          {players.map((player) => (
            <div className="card d-flex flex-column align-center">
              <img
                src={player.imageUrl}
                width={150}
                height={170}
                alt="blazergreen"
              />
              <span>{`Имя: ${player.name}`}</span>
              <span>{`Фамилия: ${player.secondName}`}</span>
              <span> {`Возраст: ${player.age} лет`}</span>
              <span>{`Статус: ${player.status}`}</span>
            </div>
          ))}
        </div>
        <div className="table d-flex flex-column align-center">
          <h3>Рейтинг</h3>
          <table>
            <tr>
              <th>№</th>
              <th>Фото</th>
              <th>Фио</th>
              <th>Победы</th>
              <th>Поражения</th>
              <th>Разница по сетам в/п</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <img width={50} height={60} src={"./img/1.jpg"}></img>
              </td>
              <td>Виктор Размарин</td>
              <td>3</td>
              <td>0</td>
              <td>3-2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img width={50} height={60} src={"./img/2.jpg"}></img>
              </td>
              <td>Игорь ГРБ</td>
              <td>2</td>
              <td>1</td>
              <td>2-2</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img width={50} height={60} src={"./img/3.jpg"}></img>
              </td>
              <td>Иван Слабаков</td>
              <td>0</td>
              <td>3</td>
              <td>0-2</td>
            </tr>
          </table>
        </div>
        <div className="results d-flex flex-column align-center">
          <h3>Результаты матчей</h3>
          <span>Игорь ГРБ VS Иван Слабаков 6-1,6-2 </span>
          <span>Игорь ГРБ VS Виктор Размарин 4-6,6-3,5-7 </span>
        </div>
      </div>
    </div>
  )
}

export default App
