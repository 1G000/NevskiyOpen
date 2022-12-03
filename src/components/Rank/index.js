import players from "../Data/Data"
import rankStyles from "./Rank.module.scss"

function Rank() {
  const playerInRate = players.map((player) => (
    <li className={rankStyles.li}>
      <div>
        <span>{player.rankingPosition}</span>
        <img src={player.imageUrl} width={50} height={50} alt="playerPhoto" />
        <span>
          {player.name} {player.secondName}
        </span>
      </div>
    </li>
  ))
  return (
    <div className="d-flex flex-column align-center">
      <h3 className={rankStyles.h3}>Рейтинг</h3>
      <ol className={rankStyles.ol}>{playerInRate}</ol>
    </div>
  )
}

export default Rank
