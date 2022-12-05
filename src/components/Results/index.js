function Results(props) {
  return (
    <div className="results d-flex flex-column align-center">
      <h3>Результаты матчей</h3>
      <div className="d-flex flex-row align-center">
        <img
          src="./img/playersPhoto/3.jpg"
          width={170}
          height={170}
          alt="playerPhoto"
        />
        <a
          href="https://www.flaticon.com/free-icons/versus"
          title="versus icons"
        >
          <img src="./img/versus.png" width={50} height={50} alt="vs" />
        </a>

        <img
          src="./img/playersPhoto/noFoto.png"
          width={170}
          height={170}
          alt="playerPhoto"
        />
      </div>
    </div>
  )
}

export default Results
