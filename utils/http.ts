/**
 * Utility for making easier HTTP requests
 */
import axios from 'axios'

class Http {

  async get(url: string) {
    try {
      const response = axios.get(url)
      return response
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.statusText)
      } else {
        console.log(error.message)
      }
    }
  }
}

export default Http