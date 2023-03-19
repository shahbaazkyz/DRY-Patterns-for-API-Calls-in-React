import React from "react"

const ApiStateHandler = ({ loading, error, children }) => {
  if (error) {
    return "Something wents wrong! Please try again"
  }
  return loading ? <h1>Loading....</h1> : children
}

export default ApiStateHandler
