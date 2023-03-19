import axios from "axios"

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      "https://random-data-api.com/api/v2/users?size=2&is_xml=true"
    )
    return data
  } catch (error) {
    throw new Error("Something wents wrong")
  }
}
