import useApiCallOnMount from "hooks/useApiCallOnMount"
import { getScienceInfo } from "./ScienceApi"

function ScienceInfo() {
  const [loading, data, error] = useApiCallOnMount(getScienceInfo)
  return (
    <div className="App">
      <h1>Science Information</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : error ? (
        <p>Something wents wrong</p>
      ) : (
        data.map((card) => (
          <div className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h4>
              {card.title}{" "}
              <i>
                {" "}
                <small>{card.newsSite}</small>{" "}
              </i>
            </h4>
            <p>{card.summary}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ScienceInfo
