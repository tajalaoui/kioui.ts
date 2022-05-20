import express, { Application } from "express"
const app: Application = express()
import session from "express-session"
import bodyParser from "body-parser"
import helmet from "helmet"
import cors from "cors"
import "dotenv/config"
import { router } from "../routes/routes"

// app.use(
//   session({
//     resave: true,
//     secret: process.env.EXPRESS_SESSION_SECRET,
//     cookie: { maxAge: Number(process.env.EXPRESS_SESSION_AGE) },
//     saveUninitialized: +process.env.EXPRESS_SESSION_AGE_SAVE_UNINTIALIZED === 1 ? true : false,
//   })
// )

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)

export { app }
