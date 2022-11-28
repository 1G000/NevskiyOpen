import React from "react"
import "./App.scss"
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
              <td></td>
              <td>Женя</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td>Саша врач</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td>Кирилл</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td>Данила Пыленок</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td>Саша американец</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td>Артём</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td>Пётр</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                {/* <img width={50} height={60} src={"./img/2.jpg"}></img> */}
              </td>
              <td>Игорь Горбатовский</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
              <td>Григор</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td></td>
              <td>Сергей</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11</td>
              <td></td>
              <td>Андрей</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12</td>
              <td></td>
              <td>Антон</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>13</td>
              <td></td>
              <td>Саша</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>14</td>
              <td></td>
              <td>Яков</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>15</td>
              <td></td>
              <td>Сергей М</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>16</td>
              <td></td>
              <td>Максим</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td></td>
              <td>Евгений</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>18</td>
              <td></td>
              <td>Костя</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>19</td>
              <td></td>
              <td>Саша музыкант</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>20</td>
              <td></td>
              <td>Даня</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="results d-flex flex-column align-center">
          <h3>Результаты матчей</h3>
          <span>Игорь ГРБ VS Иван Слабаков 6-1,6-2 </span>
          <span>Игорь ГРБ VS Виктор Размарин 4-6,6-3,5-7 </span>
          <span>Иван Слабаков VS Виктор Размарин 1-6,2-6 </span>
        </div>
      </div>
    </div>
  )
}

export default App
