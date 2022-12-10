import players from "../components/Data/Data"
import rankStyles from "../components/Rating/Rank.module.scss"

function Rating() {
  const playerInRate = players.map((player) => (
    <li className={rankStyles.li}>
      <div>
        <span className={rankStyles.rankNumber}>{player.rankingPosition}</span>
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

export default Rating
