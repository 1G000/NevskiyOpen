import React from "react"
import players from "../components/Data/Data"
import resultStyles from "../components/Results/Results.module.scss"

const Results = () => {
  return (
    <div className="d-flex align-center flex-column">
      <h3>Результаты матчей</h3>
      <div>
        <div className={resultStyles.result}>
          <div className={resultStyles.resultBlock}>
            <img
              className="p-5"
              src="./img/playersPhoto/3.jpg"
              width={100}
              height={100}
              alt="playerPhoto"
            />
            <div className={resultStyles.vsBlock}>
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
              width={100}
              height={100}
              alt="playerPhoto"
            />
          </div>
          <div className={resultStyles.playersNames}>
            <span>{`${players[7].secondName} ${players[7].name}`}</span>
            <span>{`${players[0].secondName} ${players[0].name}`}</span>
          </div>
        </div>
        <div className={resultStyles.result}>
          <div className={resultStyles.resultBlock}>
            <img
              className="p-5"
              src="./img/playersPhoto/3.jpg"
              width={100}
              height={100}
              alt="playerPhoto"
            />
            <div className={resultStyles.vsBlock}>
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
              width={100}
              height={100}
              alt="playerPhoto"
            />
          </div>
          <div className={resultStyles.playersNames}>
            <span>{`${players[7].secondName} ${players[7].name}`}</span>
            <span>{`${players[4].secondName} ${players[4].name}`}</span>
          </div>
        </div>
        <div className={resultStyles.result}>
          <div className={resultStyles.resultBlock}>
            <img
              className="p-5"
              src="./img/playersPhoto/3.jpg"
              width={100}
              height={100}
              alt="playerPhoto"
            />
            <div className={resultStyles.vsBlock}>
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
              width={100}
              height={100}
              alt="playerPhoto"
            />
          </div>
          <div className={resultStyles.playersNames}>
            <span>{`${players[7].secondName} ${players[7].name}`}</span>
            <span>{`${players[3].secondName} ${players[3].name}`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
