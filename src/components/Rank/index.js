import players from "../Data/Data"

function Rank(props) {
  return (
    <div className="table d-flex flex-column align-center">
      <h3>Рейтинг</h3>
      <ol>
        <li>{`${props.name} ${props.secondName}`}</li>
      </ol>
    </div>
  )
}

export default Rank
