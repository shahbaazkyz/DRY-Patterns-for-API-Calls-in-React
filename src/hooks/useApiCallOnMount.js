import { useEffect, useState } from "react"

const ApiStatus = {
  loading: "loading",
  complete: "complete",
  errored: "errored",
}

const useApiCallOnMount = (service) => {
  const [status, setStatus] = useState(ApiStatus.loading)
  const [data, setData] = useState(null)

  const getData = async () => {
    try {
      const data = await service()
      setData(data)
      setStatus(ApiStatus.complete)
    } catch (error) {
      setStatus(ApiStatus.errored)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return [status === ApiStatus.loading, data, status === ApiStatus.errored]
}

export default useApiCallOnMount
