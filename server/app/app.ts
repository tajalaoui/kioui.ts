import express, { Application } from "express"
const app: Application = express()
import bodyParser from "body-parser"
import helmet from "helmet"
import { router } from "../routes/routes"
import cors from "cors"
import "dotenv/config"

// import http from "http"
// import { Server } from "socket.io"

// const server = http.createServer(app)
// const io = new Server(server)
// import { ISocket } from "../types/ISocketIo.types"

// io.on("connection", (socket) => {
//   socket["username"] = "anonymous"
//   socket.on("change username", (name) => (socket.username = name))
//   socket.on("message", (msg) => io.emit("message", { user: socket.username, message: msg }))
//   socket.on("join", (username) => {
//     if (username) {
//       socket.username = username
//     }
//     socket.broadcast.emit("message", { user: "Server", message: socket.username + " has joined!" })
//   })
// })

app.use(cors({ origin: "localhost" }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

export { app }
