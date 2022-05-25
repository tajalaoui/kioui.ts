import axios, { AxiosInstance } from "axios"

// TODO Add token axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

// const token = localStorage.getItem("token")
// if (!token) throw "No token has been found"
// const tokenParsed = JSON.parse(token)

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { status } = error.response
//     if (status === 401) return localStorage.removeItem("user")
//     return Promise.reject(error)
//   }
// )

// try {
//   // ! my interceptor don't work on axios instances
//   axiosInstance.interceptors.request.use((config) => {

//     config.headers.Authorization = tokenParsed

//     return config
//   })
// } catch (error) {
//   console.log(error)
// }

export default axiosInstance
