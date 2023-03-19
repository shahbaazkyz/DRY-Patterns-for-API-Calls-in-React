import axios from "axios"
import { BASE_URL } from "utils/Api"

export const getScienceInfo = async () => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
