import { API } from "./API"

async function getUsername() {
  return await API().get("/user", { params: { id: id.value } })
}

export { getUsername }
