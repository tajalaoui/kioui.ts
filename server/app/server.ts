import { app } from "./app"
import { connectToMongo } from "../db/mongo"

async function bootstrap(): Promise<void> {
  const PORT = process.env.APP_PORT || 3000

  try {
    app.listen(PORT, (): void => {
      console.log("Connected to server ✅")
    })

    await connectToMongo()
  } catch (e) {
    console.log(e)
  }
}

bootstrap()
