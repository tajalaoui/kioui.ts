import axios from "axios"

async function API(baseURL = "http://localhost:3000/") {
  await axios.create({ baseURL })
}

export { API }
