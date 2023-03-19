import ApiStateHandler from "components/GeneralComponents/ApiStateHandler"
import useApiCallOnMount from "hooks/useApiCallOnMount"
import React from "react"
import { getUsers } from "./UserApi"

const Users = () => {
  const [loading, data, error] = useApiCallOnMount(getUsers)
  return (
    <div className="App">
      <h1>Users Information</h1>
      <ApiStateHandler loading={loading} error={error}>
        <>
          {data &&
            data.map((card) => (
              <div className="card">
                <img src={card.avatar} alt={card.first_name} />
                <h4>
                  {card.first_name} {card.last_name}
                  <i>
                    {" "}
                    <small>{card.email}</small>{" "}
                  </i>
                </h4>
                <p>{card.date_of_birth}</p>
              </div>
            ))}
        </>
      </ApiStateHandler>
    </div>
  )
}

export default Users
