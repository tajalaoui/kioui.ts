import { app } from "./app"
import { connectToMongo } from "../db/mongo"

async function bootstrap(): Promise<void> {
  const PORT = process.env.APP_PORT || 3000
  app
    .listen(PORT, (): void => {
      console.log(`Server running on port ${PORT}`)
    })
    .on("error", (e: Error) => console.log(e))

  await connectToMongo()
}

bootstrap()
