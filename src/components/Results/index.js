import players from "../Data/Data"
import resultStyles from "./Results.module.scss"

function Results() {
  return (
    <div className={resultStyles.result}>
      <h3>Результаты матчей</h3>
      <div>
        <div className="d-flex flex-row align-center p-5">
          <img
            className="p-5"
            src="./img/playersPhoto/3.jpg"
            width={150}
            height={150}
            alt="playerPhoto"
          />
          <div className="d-flex flex-column align-center p-5">
            <a
              href="https://www.flaticon.com/free-icons/versus"
              title="versus icons"
            >
              <img src="./img/versus.png" width={50} height={50} alt="vs" />
            </a>
            <span className={resultStyles.tablo}>6-3; 6-3</span>
          </div>
          <img
            className="p-5"
            src="./img/playersPhoto/noFoto.png"
            width={150}
            height={150}
            alt="playerPhoto"
          />
        </div>
        <div className="d-flex justify-between p-5">
          <span>{`${players[7].secondName} ${players[7].name}`}</span>
          <span>{`${players[0].secondName} ${players[0].name}`}</span>
        </div>
        <div className="d-flex justify-center"></div>
      </div>
    </div>
  )
}

export default Results
